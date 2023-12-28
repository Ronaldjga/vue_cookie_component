<template>
  <button
    :class="className"
    style="width: fit-content; text-wrap: nowrap"
    @click="checkAction()"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { IVariants } from "../types/variants";


const props = defineProps({
  refDialogName: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  },
  variants: {
    type: String as PropType<IVariants>,
    default: "custom"
  },
  close: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  }
})

const className = computed(() => {
  if(props.variants === 'main') {
    return `rounded-1 border-0 px-3 py-1 text-center d-block ${props.class}`
  } else {
    return props.class
  }
})

const closeAction = () => {
  if (props.refDialogName) {
    const dialog = document.getElementById(props.refDialogName) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }
}

const openAction = () => {
  if (props.refDialogName) {
    const dialog = document.getElementById(props.refDialogName) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }
}

const checkAction = () => {
  if (props.close && !props.open) {
    closeAction();
  } else if (props.open && !props.close) {
    openAction();
  }
}
</script>
