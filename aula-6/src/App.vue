<script setup>
import { ref } from 'vue'

const tarefas = ref(['tarefa 1', 'tarefa 2', 'tarefa 3'])
const novaTarefa = ref('')
const posAlterada = ref(-1)

function addTarefa() {
  if (posAlterada.value == -1) {
    if (novaTarefa.value.trim().length >= 5) {
      tarefas.value.push(novaTarefa.value)
    }
  } else {
    tarefas.value.splice(posAlterada.value, 1, novaTarefa.value)
    posAlterada.value = -1
  }
  novaTarefa.value = ''
}

function delTarefa(item) {
  const posicao = tarefas.value.indexOf(item)
  tarefas.value.splice(posicao, 1)
}

function ordenarTarefas() {
  tarefas.value.sort()
}

function editTarefa(item) {
  posAlterada.value = tarefas.value.indexOf(item)
  novaTarefa.value = item
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
          <a href="#" @click.prevent="editTarefa(tarefa)">editar</a>
          <a href="#" @click.prevent="delTarefa(tarefa)">Delete</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
