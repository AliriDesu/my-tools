declare module '*.vue' {
    import Vue from 'vue'
    import { Direction } from '@/router'
    declare module 'vue/types/vue' {
        interface Vue {
            go: (direction: Direction) => void
        }
    }
    export default Vue
}

declare module 'cryptoJs'