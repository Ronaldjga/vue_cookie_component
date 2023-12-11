<template>
  <dialog :id="dialogName" :class="className" open>
    <slot></slot>
  </dialog>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "Cookie-Dialog",
    props: {
      dialogName: {
        type: String,
        required: true
      },
      dialogClassName: String
    },
    mounted() {
      console.log(document.getElementById(this.dialogName))
    },
    computed: {
      className() {
        this.dialogClassName
        return `dialog-container ${this.dialogClassName}`
      }
    },
  })
</script>

<style scoped>

.dialog-container{
  position: fixed;
  bottom: 0px;
  left: 0px;

  width: 100vw;

  background: #fff;
}

</style>
