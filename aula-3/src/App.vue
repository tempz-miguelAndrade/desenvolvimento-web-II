<script setup>
  import { ref } from 'vue';

  //const url="https://ifc.edu.br";
  //const atributo = 'href';

  const urlUsuario = ref('');
</script>

<template>
  <!-- <a v-bind:href="url">Link</a>
  <a v-bind:[atributo]="url">link</a> -->
  
  <a v-bind:href="urlUsuario">Link do usuário</a>
  <input type="text" placeholder="Digite sua url" v-model="urlUsuario">
</template>

<style scoped>
</style>
