<template>
  <div class="prodepa-modal-backdrop">
    <div v-if="isOpen" :id="dialogName" :class="className" :seamless="seamless" tabindex="0">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, watch } from 'vue';

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

let modal = ref<HTMLElement | null>(null)
let allModals = ref<HTMLElement[] | null>(null)

const emits = defineEmits({
  escCloseAction: (payload: boolean) => {
    if(typeof payload != "boolean"){
      console.log('aqui 1', payload)
      return false
    } else {
      console.log('aqui 2', payload)
      return true
    }
  }
})

watch(() => props.isOpen, () => {
})

const className = computed(() => {
  return `prodepa-modal` + ' ' + props.class
})

const escCloseAction = () => {
  document.addEventListener('keydown', (e) => {
      if (props.isOpen === true && props.escClose === true) {
        if(e.code === "Escape"){
          emits('escCloseAction', !props.isOpen)
        }
      }
  })  
}

onUpdated(async () => {
  modal.value = document.getElementById(`${props.dialogName}`)
  allModals.value = Array.from(document.querySelectorAll(`.prodepa-modal`));
  if(allModals.value.length > 0){
    allModals.value[allModals.value.length - 1].focus()
    const lastModalAttributeSeamless = Array.from(allModals.value[allModals.value.length - 1].attributes).find(att => att.name === 'seamless')?.value

    if(lastModalAttributeSeamless === "true"){
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
    console.log(lastModalAttributeSeamless)
  }
  escCloseAction()
})

onMounted(() => {
})
</script>

<style scoped>
.prodepa-modal {
  display: block;
  width: 100%;
  max-width: 95vw;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  background-color: #0071ce;
}

.prodepa-modal:focus {
  background-color: blueviolet;
}

@media (min-width: 1080px) {
  .prodepa-modal{
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
}

</style>