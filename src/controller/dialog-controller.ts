import { Component, Vue, Model, Watch } from "vue-property-decorator"

export class DialogContainerSize {
    public static readonly containerSize = "627px"

    public static readonly innerDialogSize = "568px"

    public static readonly largeDrawerSize = "960px"
}
@Component({})
export class DialogController extends Vue {
    protected readonly miniSize = DialogContainerSize.containerSize
    protected readonly largeSize = DialogContainerSize.largeDrawerSize

    @Model("update")
    protected readonly value!: boolean

    protected readonly dialogWidth = 600 + "px"

    protected loading = false



    protected close() {
        this.$emit("update", false)
        this.$emit("close", false)
        this.onClosing()
    }

    protected onClosing() {
    }

    @Watch("value")
    private onValueChanged() {
        if (this.value) {
            this.onOpen()
        }
    }

    protected onOpen() {
    }
}
