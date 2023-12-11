<template>
    <button @click="checkAction">
        <template v-if="!$slots.default">{{ content }}</template>
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "Cookie-Button",
        props:{
            content: String,
            refDialogName: {
                type: String,
                require: true,
            },
            close: {
                type: Boolean,
                default: false
            },
            action: {
                type: Function,
            }
        },
        methods: {
            closeAction() {
                if(this.refDialogName){
                    const dialog = document.getElementById(this.refDialogName) as HTMLDialogElement
                    if(dialog){
                        dialog.close()
                    }
                }
            },
            checkAction() {
                if(this.action && this.close) {
                    this.action()
                    this.closeAction()
                } else if(this.action) {
                    this.action()
                }
            }
        }
    })
</script>