<template>
  <cookieButton
        ref-dialog-name="mainDialog"
        variants="main"
        @click="() => {
          changeIsOpen()
          console.log(isOpen)
        }"
      >
    abrir modal 1
    </cookieButton>

  <!-- <cookieButton ref-dialog-name="mainDialog" :action="teste" open>Ok</cookieButton> -->
  <cookieDialog
    dialog-name="mainDialog"
    :isOpen="isOpen"
    :esc-close="false"
    :seamless="true"
    @esc-close-press="(b) => {
      console.log(b, 'aquiii')
      changeIsOpen()
    }"
  >
    <p class="text-light">
      Para melhorar a sua experiência no portal e prover serviços personalizados,
      utilizamos cookies. Ao aceitar, você terá acesso a todas as funcionalidades do
      site. Se clicar em "Rejeitar Cookies", os cookies que não forem estritamente
      necessários serão desativados. Para escolher quais quer autorizar, clique em
      "Gerenciar cookies". Saiba mais em nossa Política de cookies
    </p> 
    <cookieActions variants="main">
      <cookieButton
        ref-dialog-name="mainDialog"
        class="bg-danger text-light"
        variants="main"
        >Aceitar</cookieButton
      >
      <cookieButton
        ref-dialog-name="mainDialog"
        variants="main"
        @click="changeIsOpen()"
        >Recusar</cookieButton
      >
      <cookieButton
        ref-dialog-name="secondDialog"
        variants="main"
        @click="changeIsOpen2()"
      >
        Gerenciar Cookies
      </cookieButton>
    </cookieActions>
  </cookieDialog>

  <cookieDialog dialog-name="secondDialog" :isOpen="isOpen2" :esc-close="true">
    <h2>testando dialog dentro dialog</h2>
    <cookieButton ref-dialog-name="secondDialog" close>Aceitar</cookieButton>
    <cookieButton ref-dialog-name="secondDialog" @click="changeIsOpen2()">Recusar</cookieButton>
  </cookieDialog>
</template>

<script setup lang="ts">
import cookieDialog from "../components/cookie-dialog.vue";
import cookieButton from "../components/cookie-button.vue";
import cookieActions from "../components/cookie-actions.vue";
import { ref } from "vue";

let isOpen = ref(false);
let isOpen2 = ref(false)

const changeIsOpen = () => {
  isOpen.value = !isOpen.value
}

const changeIsOpen2 = () => {
  isOpen2.value = !isOpen2.value
}
</script>
