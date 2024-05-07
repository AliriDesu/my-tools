<template>
    <div>
        <div class="font-weight-6 color-3 u-m-b-20 u-font-24">密文</div>
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
                <el-button
                    type="danger"
                    @click="
                        value = ''
                        dValue = ''
                    "
                    >清空</el-button
                >
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { decodeValue } from "../decode"

@Component({ components: {} })
export default class AesTab extends Vue {
    @Prop()
    private cKey!: string
    value = ""
    dValue = ""

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
}
</script>

<style lang="less" scoped>
@import "~@/css/variables.less";
.k {
    width: 200px;
}
</style>
