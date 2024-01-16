<template>
  <dialog v-show="isOpen" :id="dialogName" :seamless="seamless" @keydown="escClose" :esc-close="escClose">
    <slot></slot>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

let dialogElement = ref<HTMLDialogElement | null>(null)
let dialogsList = ref<HTMLDialogElement[] | null>(null)
const emits = defineEmits({
  'esc-close-press': Boolean
})

const props = defineProps({
  dialogName: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  escClose: {
    type: Boolean,
    default: false
  },
  seamless: {
    type: Boolean,
    default: false
  }
})

const handlerModal = () => {
  if(dialogElement.value) {
    if(props.isOpen === true) {
      dialogElement.value.showModal();
      dialogElement.value.className = 'p-dialog' + ' ' + props.class;
    } else if(props.isOpen === false){
      dialogElement.value?.close()
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
      dialogElement.value.className = '';
    }
  }

  dialogsList.value = Array.from(document.querySelectorAll<HTMLDialogElement>('.p-dialog'))
  if(dialogsList.value.length > 0){
    if(Array.from(dialogsList.value[0].attributes).find(att => att.name === 'seamless')?.value === "true") {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }
  }
}

watch(() => props.isOpen, () => {
  handlerModal()
  dialogElement.value?.focus()
})


const escClose = (event: KeyboardEvent) => {
  if(props.isOpen === true && props.escClose === true) {
    if(event.code === "Escape") {
      console.log("aqui 1")
      event.preventDefault()
    }
  }

  if(props.isOpen === true && props.escClose === false) {
    console.log("aqui 2")
    emits('esc-close-press', dialogElement.value?.open)
  }
};

onMounted(() => {
  const dialog = document.getElementById(props.dialogName) as HTMLDialogElement | null;
  dialogElement.value = dialog;
  handlerModal()
  document.addEventListener('keydown', (e): void => {
    if(e.code === "Escape") {
      e.preventDefault()
    }
  })
})
</script>

<style scoped>
.p-dialog {
  width: 100%;
  max-width: 95vw;
  position: fixed;
  margin-bottom: 15px;
  border: 0px;
  padding: 15px;
  background-color: #0071ce;
}

@media (min-width: 1080px) {
  .p-dialog{
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
}

</style>
