<script setup>
  import { ref } from 'vue'

  const nome = ref('Miguel');
  const contador = ref(0);

  function incrementarContador() {
    contador.value++;
  };

  function descrementarContador() {

    if (contador.value > 0) {
      contador.value--;
    };

  };
</script>

<template>
  <button @click="incrementarContador">incrementar</button>
  <button :disabled="contador <= 0" @click="descrementarContador">descrementar</button>
  <p>Contador do {{ nome }}: {{ contador }}</p>
</template>

<style scoped>

</style>
