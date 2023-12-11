<script setup lang="ts">
  import cookieDialog from './components/cookie-dialog.vue';
  import cookieButton from './components/cookie-button.vue';
  function teste () {
    console.log('funcionoyyy')
  }
</script>

<template>
  <cookieDialog dialog-name="mainDialog" dialog-class-name="testeeee">
    <h1>TESTANDO</h1>
    <cookieButton ref-dialog-name="mainDialog" :action="teste" close>Ok</cookieButton>
  </cookieDialog>
</template>

<style>
  body {
    background-color: #333;
  }
</style>
