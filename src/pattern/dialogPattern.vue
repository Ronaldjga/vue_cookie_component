<template>
  <button 
        @click="() => {
          changeIsOpen()
          console.log(isOpen)
        }"
      >
    abrir modal 1
    </button>

    <CookieDialogDiv class="testeeee" dialog-name="mainDialog" :is-open="isOpen" :seamless="true">
      <h1>TESTEEEE 111111111111</h1>
    </CookieDialogDiv>

    <button
        @click="() => {
          changeIsOpen2()
          console.log(isOpen2)
        }"
      >
    abrir modal 2
    </button>

    <CookieDialogDiv 
      class="w-50 top-50 translate-middle"
      dialog-name="secondDialog"
      :is-open="isOpen2"
      :esc-close="true"
      @esc-close-action.self="(n) => isOpen2 = n"
    >
      <h1>TESTEEEE 22222222222</h1>
    </CookieDialogDiv>
</template>

<script setup lang="ts">
import cookieDialog from "../components/cookie-dialog.vue";
import cookieButton from "../components/cookie-button.vue";
import cookieActions from "../components/cookie-actions.vue";
import cookieModal from "../components/cookie-dialog-div.vue";
import { ref } from "vue";
import CookieDialogDiv from "../components/cookie-dialog-div.vue";

let isOpen = ref(false);
let isOpen2 = ref(false)

const changeIsOpen = () => {
  isOpen.value = !isOpen.value
}

const changeIsOpen2 = () => {
  isOpen2.value = !isOpen2.value
}
</script>
