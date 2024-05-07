export namespace RootStore {
    export const Global = 'global'
    export type Global = GlobalConfig
    export const UpdateGlobal = 'updateGlobal'
    export type UpdateGlobal = (global: Global) => void

    export const updateGlobalTitle = 'updateGlobalTitle'
    export type updateGlobalTitle = (title: string) => void
}

export interface GlobalConfig {
    name: string
    title: string
}
