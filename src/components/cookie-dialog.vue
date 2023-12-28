<template>
  <dialog :id="dialogName" :class="className" @keydown="escClose">
    <div :class="contentClassName">
      <slot></slot>
    </div>
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
    class: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    disableEscClose: { type: Boolean, default: false },
    variants: {
      type: String as () => IVariants,
      default: "Custom",
    },
  },
  computed: {
    className() {
      if (this.variants === "main") {
        return `container position-fixed mb-1 border-0 rounded-1 bg-primary p-0 ${this.class}`;
      } else {
        return this.class;
      }
    },
    contentClassName() {
      if (this.variants === "main") {
        return `p-3 d-lg-flex bg-primary justify-content-lg-between flex-wrap flex-lg-nowrap ${this.contentClass}`;
      } else {
        return this.contentClass;
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
