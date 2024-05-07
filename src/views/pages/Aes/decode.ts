
export const CryptoJS = (window as any).cryptoJs();
export function decodeValue(input: string, cKey: string) {
    const key = CryptoJS.enc.Utf8.parse(cKey)
    if (input.startsWith(`"`)) {
        input = input.slice(1, -1)
    }
    const encryptedHex = CryptoJS.enc.Hex.parse(input.replaceAll(" ", ""));
    const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedHex }, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    try {
        const v = CryptoJS.enc.Utf8.stringify(decrypted).toString();
        if (v.startsWith("{")) {
            return eval(`(${v})`)
        }
        return v;
    } catch (e) {
        console.error(e);
        return input;
    }
}

export interface Row {
    label: string
    key: string
}