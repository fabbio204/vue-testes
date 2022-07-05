<template>
  <div>
    <Cabecalho/>
    Página Principal
    <Rodape/>
  </div>
</template>

<script>
import Rodape from "./componentes/Rodape.vue";
import Cabecalho from "./componentes/Cabecalho.vue";
export default {
  components: { Rodape,  Cabecalho },
  name: "Main",
};
</script>
