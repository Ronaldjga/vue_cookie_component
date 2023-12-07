<template>
    <button>
        <template v-if="!$slots.default">{{ content }}</template>
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    type TActions = "close" | "accept"

    export default defineComponent({
        props:{
            content: String,
            action: {
                type: String as () => TActions,
                default: "close"
            }
        }
    })
</script>