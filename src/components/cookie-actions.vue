<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type IVariants = "main" | "custom";

export default defineComponent({
    name: "Cookie-Actions",
    props: {
        class: {
            type: String,
            default: ""
        },
        variants: {
            type: String as () => IVariants,
            default: "custom"
        }
    },
    computed: {
        className() {
            if(this.variants === 'main') {
                return `d-flex gap-2 flex-wrap flex-lg-nowrap justify-content-center align-items-center ${this.class}`
            } else {
                return this.class
            }
        }
    }
})
</script>
<style>
    
</style>