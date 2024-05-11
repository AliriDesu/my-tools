<template>
    <div>
        <div
            class="font-weight-6 color-3 u-m-b-20 u-font-24 u-flex u-row-between"
        >
            <div>密文</div>
            <div v-if="!cKey">
                <el-button
                    type="primary"
                    @click="showPop = true"
                    :disabled="!myKey"
                    >保存当前配置</el-button
                >
            </div>
            <div v-else>
                <el-button type="danger" @click="del">删除当前配置</el-button>
            </div>
        </div>
        <el-input
            v-model="value"
            type="textarea"
            rows="12"
            resize="none"
        ></el-input>
        <div class="u-flex u-row-right u-m-t-20">
            <div class="u-flex u-flex-1" v-if="!cKey">
                <div class="u-flex-none">密钥：</div>
                <el-input class="k" v-model="myKey"></el-input>
            </div>
            <div>
                <el-button type="danger" @click="clear">清空</el-button>
                <el-button
                    type="primary"
                    @click="decode"
                    :disabled="!value || !computeKey"
                    >解密</el-button
                >
            </div>
        </div>
        <el-input
            v-model="dValue"
            type="textarea"
            rows="12"
            class="u-m-t-20"
            resize="none"
        ></el-input>
        <aes-pop v-model="showPop" :cKey="myKey" @confirm="add"></aes-pop>
    </div>
</template>

<script lang="ts">
import { MessageBox } from "element-ui"
import { Component, Prop, Vue } from "vue-property-decorator"
import { decodeValue, Row } from "../decode"
import AesPop from "./aes-pop.vue"

@Component({ components: { AesPop } })
export default class AesTab extends Vue {
    @Prop()
    private cKey!: string
    value = ""
    dValue = ""
    private showPop = false

    private myKey = ""

    private get computeKey() {
        return this.myKey || this.cKey
    }

    private decode() {
        const v = decodeValue(this.value, this.computeKey)
        if (v === this.value) return
        console.log("%c输出结果↓↓", "color:#5782EC;")
        console.log(JSON.parse(JSON.stringify(v)))
        this.dValue = JSON.stringify(v)
    }

    private add(e: Row) {
        this.$emit("add", e)
    }

    private del() {
        MessageBox.confirm("确认删除此配置？", "提示")
            .then(() => {
                this.$emit("del", this.cKey)
            })
            .catch(() => {})
    }

    private clear() {
        this.value = ""
        this.dValue = ""
        console.clear()
    }
}
</script>

<style lang="less" scoped>
@import "~@/css/variables.less";
.k {
    width: 200px;
}
</style>
