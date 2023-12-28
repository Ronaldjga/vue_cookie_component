<template>
  <button
    :class="className"
    style="width: fit-content; text-wrap: nowrap"
    @click="checkAction()"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type IVariants = "main" | "custom";

export default defineComponent({
  name: "Cookie-Button",
  props: {
    refDialogName: {
      type: String,
      require: true,
    },
    class: {
      type: String,
      default: ""
    },
    variants: {
      type: String as () => IVariants,
      default: "custom"
    },
    close: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      if(this.variants === 'main') {
        return `rounded-1 border-0 px-3 py-1 text-center d-block ${this.class}`
      } else {
        return this.class
      }
    } 
  },
  methods: {
    closeAction() {
      if (this.refDialogName) {
        const dialog = document.getElementById(this.refDialogName) as HTMLDialogElement;
        if (dialog) {
          dialog.close();
        }
      }
    },
    openAction() {
      if (this.refDialogName) {
        const dialog = document.getElementById(this.refDialogName) as HTMLDialogElement;
        if (dialog) {
          dialog.showModal();
        }
      }
    },
    async checkAction() {
      if (this.close && !this.open) {
        this.closeAction();
      } else if (this.open && !this.close) {
        this.openAction();
      }
    },
  },
});
</script>
