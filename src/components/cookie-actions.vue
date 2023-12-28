<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue';
import type { IVariants } from "../types/variants"

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    variants: {
        type: String as PropType<IVariants>,
        default: "custom"
    }
})

const className = computed(() => {
    console.log('ta fuonando aqui')
    if(props.variants === 'main') {
        return `d-flex gap-2 flex-wrap flex-lg-nowrap justify-content-center align-items-center ${props.class}`
    } else {
        return props.class
    }
})
</script>
<style>
    
</style>