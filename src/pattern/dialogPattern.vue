<template>
  <!-- <cookieButton ref-dialog-name="mainDialog" :action="teste" open>Ok</cookieButton> -->
  <cookieDialog
    dialog-name="mainDialog"
    dialog-class-name="testeeee"
    :isOpen="isOpen"
    :disable-esc-close="true"
    variants="main"
  >
    <div
      class="d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap flex-lg-nowrap"
    >
      <div class="bg-info w-75">
        <p>
          Para melhorar a sua experiência no portal e prover serviços personalizados,
          utilizamos cookies. Ao aceitar, você terá acesso a todas as funcionalidades do
          site. Se clicar em "Rejeitar Cookies", os cookies que não forem estritamente
          necessários serão desativados. Para escolher quais quer autorizar, clique em
          "Gerenciar cookies". Saiba mais em nossa Política de cookies
        </p>
      </div>
      <div
        class="d-flex gap-2 bg-danger flex-wrap flex-lg-nowrap justify-content-center align-items-center"
        style="width: 50%"
      >
        <cookieButton
          ref-dialog-name="mainDialog"
          class="bg-dark"
          @click="setCookies('true')"
          >Aceitar</cookieButton
        >
        <cookieButton ref-dialog-name="mainDialog" class="" @click="setCookies('false')"
          >Recusar</cookieButton
        >
        <cookieButton
          ref-dialog-name="secondDialog"
          class=""
          @click="() => (isOpen2 = !isOpen2)"
          open
        >
          Gerenciar Cookies
        </cookieButton>
      </div>
    </div>
  </cookieDialog>
  <cookieDialog dialog-name="secondDialog" :isOpen="isOpen2" :disable-esc-close="false">
    <h2>testando dialog dentro dialog</h2>
    <cookieButton ref-dialog-name="secondDialog" @click="setCookies('true')" close
      >Aceitar</cookieButton
    >
    <cookieButton ref-dialog-name="secondDialog" @click="setCookies('false')" close
      >Recusar</cookieButton
    >
  </cookieDialog>
</template>

<script>
import cookieDialog from "../components/cookie-dialog.vue";
import cookieButton from "../components/cookie-button.vue";
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
  },
  methods: {
    setCookies(value) {
      this.$cookies.set("lgpd_cookies", value, 365);
    },
    verifyCookies() {
      const cookieStats = this.$cookies.get("lgpd_cookies");
      if (cookieStats) {
        console.log("vai ser false");
        this.isOpen = false;
      } else {
        console.log("vai ser true");
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
