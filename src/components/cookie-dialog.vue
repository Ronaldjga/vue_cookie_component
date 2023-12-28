<template>
  <dialog :id="dialogName" :class="className" @keydown="escClose">
    <div :class="contentClassName">
      <slot></slot>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { PropType, ref, computed, onMounted } from "vue";
import type { IVariants } from "../types/variants";

let dialogElement = ref<HTMLDialogElement | null>(null)

const props = defineProps({
  dialogName: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean
  },
  class: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: ''
  },
  disableEscClose: {
    type: Boolean,
    default: false
  },
  variants: {
    type: String as PropType<IVariants>,
    default: "custom"
  }
})

const className = computed(() => {
  if (props.variants === "main") {
      return `container position-fixed mb-1 border-0 rounded-1 bg-primary p-0 ${props.class}`;
    } else {
    return props.class;
  }
})

const contentClassName = computed(() => {
  if (props.variants === "main") {
    return `p-3 d-lg-flex bg-primary justify-content-lg-between flex-wrap flex-lg-nowrap ${props.contentClass}`;
  } else {
    return props.contentClass;
  }
})

const escClose = (event: KeyboardEvent) => {
  if(props.disableEscClose === true && event.code === "Escape") {
    event.preventDefault();
  }
}

onMounted(() => {
  const dialog = document.getElementById(props.dialogName) as HTMLDialogElement | null;
  dialogElement.value = dialog;
  if (props.isOpen === true && dialogElement.value != null) {
    dialogElement.value.showModal();
  }
})
</script>

<style></style>
