<script setup>
  import { ref } from 'vue';

  const tarefas = ref([
    'seminários',
    'contador',
    'português'
  ]);
</script>

<template>
  <div class="container">
      <h1>Lista de tarefas</h1>
      <ul>
        <li v-for="tarefa in tarefas" :key="tarefa">
            {{ tarefa }}
        </li>
      </ul>
  </div>
  <div class="adicionar">
    <p>Adicione uma nova tarefa a lista:</p>
    <input type="text" v-model="novaTarefa" >
    <button @click="tarefas.push(novaTarefa)">Adicionar</button>
  </div>
</template>

<style scoped>
</style>
