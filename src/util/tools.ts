export function getRangeStr() {
    const s: (number | string)[] = []
    const hexDigits = '0123456789abcdef'
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'
    s[19] = hexDigits.substr((+s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = '-'

    return s.join('')
}
export function readFile2Text(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            const f = new FileReader()
            f.readAsText(file, 'utf-8')
            f.onload = (res) => {
                resolve(res.target?.result as string)
            }
        } catch (e) {
            reject(e as string)
        }
    })
}
