import Vue from 'vue'
import Vuex from 'vuex'
import { GlobalConfig, RootStore } from './model'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        [RootStore.Global]: { name: 'global', title: '' },
    },
    mutations: {
        [RootStore.UpdateGlobal]: (state, d: GlobalConfig) => {
            state[RootStore.Global] = d
        },
        [RootStore.updateGlobalTitle]: (state, d: string) => {
            state[RootStore.Global].title = d
        },
    },
    actions: {},
    modules: {},
})
