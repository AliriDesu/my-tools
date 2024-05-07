<template>
    <div>
        <el-tabs v-model="curTab" type="card">
            <el-tab-pane
                :name="item.label"
                :label="item.label"
                v-for="item in computeList"
                :key="item.label"
            >
                <aes-tab :cKey="item.key" @add="add" @del="del"></aes-tab>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import { remove } from "lodash"
import { Component, Vue } from "vue-property-decorator"
import AesTab from "./components/aes-tab.vue"
import { Row } from "./decode"

@Component({ components: { AesTab } })
export default class AesIndex extends Vue {
    private list: Row[] = [
        // {
        //     label: "孝感",
        //     key: "askjwieru@3x!$12",
        // },
        // {
        //     label: "荆州",
        //     key: "skjw@jcnqujn$mj5",
        // },
        // {
        //     label: "肇庆",
        //     key: "uijhgvlyt@5h!$97",
        // },
    ]

    private get computeList() {
        return [
            ...this.list,
            {
                label: "自定义",
                key: "",
            },
        ]
    }

    private curTab = "孝感"

    private buildList() {
        try {
            this.list = JSON.parse(
                localStorage.getItem("aesList") || "[]"
            ) as Row[]
        } catch {
            this.list = []
        }
        this.curTab = this.computeList[0].label
    }

    mounted() {
        this.buildList()
    }

    private add(e: Row) {
        this.list = [e, ...this.list]
        localStorage.setItem("aesList", JSON.stringify(this.list))
        this.$emit("add", e)
        this.curTab = this.computeList[0].label
    }

    private del(key: string) {
        const del = remove(this.list, (e) => e.key === key)
        this.list = [...this.list]
        if (del[0].label === this.curTab) {
            this.curTab = this.computeList[0].label
        }
        localStorage.setItem("aesList", JSON.stringify(this.list))
    }
}
</script>

<style lang="less" scoped>
@import "~@/css/variables.less";
</style>
