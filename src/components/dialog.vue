<template>
  <dialog class="dialog-container" open>
    <slot></slot>
  </dialog>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    data() {
      
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
