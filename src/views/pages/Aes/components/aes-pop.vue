<template>
    <el-dialog
        append-to-body
        :visible="value"
        @close="close"
        title="保存当前配置"
        width="400px"
        border-radius="8px"
    >
        <div>
            <div class="u-flex">
                <div class="u-font-16 u-m-b-10 u-flex-none u-m-r-20">
                    当前配置密钥
                </div>
                <el-input :value="cKey" class="input" disabled></el-input>
            </div>
            <div class="u-flex u-m-t-20">
                <div class="u-font-16 u-m-b-10 u-flex-none u-m-r-20">
                    当前配置名称
                </div>
                <el-input
                    v-model="label"
                    class="input"
                    placeholder="例：孝感"
                ></el-input>
            </div>
        </div>
        <div class="u-flex u-row-center u-m-t-40">
            <el-button type="primary" plain @click="close">取消</el-button>
            <el-button type="primary" class="u-m-l-30" @click="confirm"
                >确定</el-button
            >
        </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { DialogController } from "../../../../controller/dialog-controller"
import { Row } from "../decode"

@Component({ components: {} })
export default class AesPop extends DialogController {
    @Prop()
    private cKey!: string

    private label = ""

    private confirm() {
        if (!this.label) {
            this.$message.error("请输入配置名称")
            return
        }
        let list: Row[] = []
        try {
            list = JSON.parse(localStorage.getItem("aesList") || "[]") as Row[]
        } catch {
            list = []
        }
        if (list.some((e) => e.key === this.cKey)) {
            this.$message.error("密钥已存在")
            return
        }
        if (list.some((e) => e.label === this.label)) {
            this.$message.error("配置名称已存在")
            return
        }
        this.$emit("confirm", {
            label: this.label,
            key: this.cKey,
        })
        this.$message.success("配置添加成功")
        this.close()
    }
}
</script>

<style lang="less" scoped>
@import "~@/css/variables.less";
</style>
