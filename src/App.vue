<template>
    <div id="app">
        <l-header></l-header>
        <div class="u-flex container-height u-col-top">
            <l-menu v-if="showMenu"></l-menu>
            <div class="flex-1 h-100 content-container u-p-20">
                <keep-alive>
                    <router-view />
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import LHeader from "./views/components/l-header.vue"
import LMenu from "./views/components/l-menu.vue"

@Component({ components: { LMenu, LHeader } })
export default class App extends Vue {
    private showMenu = localStorage.getItem("isManage") === "true"
}
</script>

<style lang="less">
body {
    padding: 0;
    margin: 0;
}
</style>
