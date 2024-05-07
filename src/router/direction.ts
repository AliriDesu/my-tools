export enum Direction {
    Login,
    Root,
    Home,
    Aes
}


export const RouterMenu = [
    {
        label: '首页',
        direction: Direction.Home,
    },
    {
        label: 'AES解密',
        direction: Direction.Aes,
    },
]
