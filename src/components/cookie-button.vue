<template>
  <button
    class="rounded-1 border-0 px-3 py-1 text-center d-block"
    style="width: fit-content"
    @click="checkAction()"
  >
    <template v-if="!$slots.default">{{ content }}</template>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cookie-Button",
  props: {
    content: String,
    refDialogName: {
      type: String,
      require: true,
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
        console.log("erro 4");
        this.closeAction();
      } else if (this.open && !this.close) {
        console.log("erro 5");
        this.openAction();
      }
    },
  },
});
</script>
