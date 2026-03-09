<script setup>
import { ref } from 'vue'

const tarefas = ref(['tarefa 1', 'tarefa 2', 'tarefa 3'])
const novaTarefa = ref('')

function addTarefa() {
  if (novaTarefa.value.trim().length >= 5) {
    tarefas.value.push(novaTarefa.value);
  }
  novaTarefa.value = '';
}


function delTarefa(item) {
  const posicao = tarefas.value.indexOf(item);
  tarefas.value.splice(posicao, 1);
}


function ordenarTarefas() {
  tarefas.value.sort();
}


function editarTarefa(item) {
  const posicao = tarefas.value.indexOf(item);
  tarefas.value[posicao, 1] = ('');
}
</script>

<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <input type="text" v-model="novaTarefa" />
    <button @click="addTarefa()">Add</button><br />
    <button @click="ordenarTarefas()">Ordenar</button>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa">
        {{ tarefa }}
        <span>
          <a href="#" @click.prevent="editTarefa()">editar</a>
          <a href="#" @click.prevent="delTarefa(tarefa)">Delete</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
