<template>
  <!-- <cookieButton ref-dialog-name="mainDialog" :action="teste" open>Ok</cookieButton> -->
  <cookieDialog
    dialog-name="mainDialog"
    :isOpen="isOpen"
    :disable-esc-close="true"
    variants="main"
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
        @click="setCookies('true')"
        >Aceitar</cookieButton
      >
      <cookieButton
        ref-dialog-name="mainDialog"
        variants="main"
        @click="setCookies('false')"
        >Recusar</cookieButton
      >
      <cookieButton
        ref-dialog-name="secondDialog"
        variants="main"
        @click="() => (isOpen2 = !isOpen2)"
        open
      >
        Gerenciar Cookies
      </cookieButton>
    </cookieActions>
  </cookieDialog>

  <cookieDialog dialog-name="secondDialog" :isOpen="isOpen2" :disable-esc-close="false">
    <h2>testando dialog dentro dialog</h2>
    <cookieButton ref-dialog-name="secondDialog" @click="setCookies('true')" close>Aceitar</cookieButton>
    <cookieButton ref-dialog-name="secondDialog" @click="setCookies('false')" close>Recusar</cookieButton>
  </cookieDialog>
</template>

<script>
import cookieDialog from "../components/cookie-dialog.vue";
import cookieButton from "../components/cookie-button.vue";
import cookieActions from "../components/cookie-actions.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOpen: Boolean,
      isOpen2: false,
    };
  },
  components: {
    cookieDialog,
    cookieButton,
    cookieActions
  },
  methods: {
    setCookies(value) {
      this.$cookies.set("lgpd_cookies", value, 365);
    },
    verifyCookies() {
      const cookieStats = this.$cookies.get("lgpd_cookies");
      if (cookieStats) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
      console.log(cookieStats);
    },
  },
  created() {
    this.verifyCookies();
  },
});
</script>
