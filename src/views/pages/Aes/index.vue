<template>
    <div>
        <el-tabs v-model="curTab" type="card">
            <el-tab-pane
                :name="item.label"
                :label="item.label"
                v-for="item in list"
                :key="item.label"
            >
                <aes-tab :cKey="item.key"></aes-tab>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AesTab from "./components/aes-tab.vue"

@Component({ components: { AesTab } })
export default class AesIndex extends Vue {
    private list = [
        {
            label: "孝感",
            key: "askjwieru@3x!$12",
        },
        {
            label: "荆州",
            key: "skjw@jcnqujn$mj5",
        },
        {
            label: "肇庆",
            key: "uijhgvlyt@5h!$97",
        },
        {
            label: "自定义",
            key: "",
        },
    ]

    private curTab = "孝感"
}
</script>

<style lang="less" scoped>
@import "~@/css/variables.less";
</style>
