<script setup>
  import { ref } from 'vue'

  const mostrar = ref(false);

  function inverter() {
    mostrar.value = !mostrar.value
  }

  const texto = ref('');
</script>

<template>
  <div>
    <input type="text" v-model="texto">
    <label>Texto: {{ texto }}</label>
    <button @click="mostrar = !mostrar" >Mostrar/Ocultar</button>
    <div v-if="mostrar">
        <p>Mostra em v-if</p>
    </div>
    <div v-else>
        <p>Agora não mostra em v-else</p>
    </div>
  </div>
</template>

<style scoped>

</style>
