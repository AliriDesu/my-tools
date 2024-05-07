<template>
    <div class="l-menu h-100">
        <el-menu class="el-menu-vertical-demo" @select="selectMenu">
            <el-menu-item
                v-for="menu in routerMenu"
                :key="menu.direction"
                :index="menu.direction + ''"
                class="menu-item"
            >
                {{ menu.label }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import { Direction, RouterMenu } from "@/router/direction"
    import { Component, Vue } from "vue-property-decorator"

    @Component({ components: {} })
    export default class LMenu extends Vue {
        private routerMenu = RouterMenu

        private selectMenu(direction: Direction, b: any, c: any) {
            this.go(direction)
        }
    }
</script>

<style lang="less" scoped>
    @import "@/style/style.less";
    .l-menu {
        background-color: #fafafa;
        width: 200px;
        .menu-item {
            display: block;
            margin-bottom: 8px;
            line-height: 50px;
            cursor: pointer;
        }
    }
</style>
