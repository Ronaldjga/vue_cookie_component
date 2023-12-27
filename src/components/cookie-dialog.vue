<template>
  <dialog :id="dialogName" :class="className" @keydown="escClose">
    <slot></slot>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type IVariants = "main" | "custom";

export default defineComponent({
  name: "Cookie-Dialog",
  data() {
    return {
      dialogElement: null as HTMLDialogElement | null,
    };
  },
  props: {
    dialogName: { type: String, required: true },
    isOpen: Boolean,
    dialogClassName: String,
    disableEscClose: { type: Boolean, default: false },
    variants: {
      type: String as () => IVariants,
      default: "Custom",
    },
  },
  computed: {
    className() {
      if (this.variants === "main") {
        return `${this.dialogClassName} container position-fixed mb-1 bg-primary border-0 rounded-1`;
      } else {
        return this.dialogClassName;
      }
    },
  },
  mounted() {
    const dialog = document.getElementById(this.dialogName) as HTMLDialogElement;
    this.dialogElement = dialog;
    if (this.isOpen === true) {
      dialog.showModal();
    }
  },
  methods: {
    escClose(event: KeyboardEvent) {
      if (this.disableEscClose === true && event.code === "Escape") {
        console.log(event);
        event.preventDefault();
      }
    },
  },
});
</script>

<style></style>
