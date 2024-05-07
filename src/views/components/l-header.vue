<template>
    <div class="l-header u-flex">
        <div>{{ title }}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator"
    import { State } from "vuex-class"
    import { GlobalConfig, RootStore } from "@/store/model"

    @Component({ components: {} })
    export default class LHeader extends Vue {
        private get title() {
            return this.global.title || ""
        }

        @State(RootStore.Global)
        private global!: GlobalConfig
    }
</script>

<style lang="less" scoped>
    @import "@/style/style.less";
    .l-header {
        padding: 0 40px;
        height: @header-height;
        background-color: @header-bg;
        color: #fff;
        font-size: 18px;
    }
</style>
