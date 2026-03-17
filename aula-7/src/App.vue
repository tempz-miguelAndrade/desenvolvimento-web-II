<script setup>
import { ref } from 'vue'
const tarefas = ref([
  {
    id: 1,
    tarefa: 'Tarefa 1',
    status: 'concluida',
  },
  {
    id: 2,
    tarefa: 'Tarefa 2',
    status: 'concluida',
  },
  {
    id: 3,
    tarefa: 'Tarefa 3',
    status: 'pendente',
  },
  {
    id: 4,
    tarefa: 'Tarefa 4',
    status: 'pendente',
  },
])

const novaTarefa = ref('')
const posAlterada = ref(null)

function addTarefa(item) {
  if (novaTarefa.value.trim( ).length >= 5) {
    if (posAlterada.value == null) {
        tarefas.value.push({
    id: tarefas.value[tarefas.value.length - 1].id + 1,
    tarefa: item,
    status: 'pendente',
  })
    } else {
      tarefas.value[posAlterada.value].tarefa = novaTarefa.value
      posAlterada.value = null
    }
  }
  novaTarefa.value = ''
}

function delTarefa(item) {
  let i = tarefas.value.indexOf(item)
  tarefas.value.splice(i, 1)
}

function editTarefa(item) {
  posAlterada.value = tarefas.value.indexOf(item)
  novaTarefa.value = item.tarefa
}

function concluirTarefa(item) {
  item.status = item.status === 'concluida' ? 'pendente' : 'concluida'
}
</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa" />
    <button @click="addTarefa(novaTarefa)">Adicionar</button>
    <ul>
      <li v-for="item in tarefas" :key="item.id" :class="{concluida: item.status === 'concluida'}">
        {{ item.tarefa }}
        <button @click="delTarefa(item)">Excluir</button>
        <button @click="editTarefa(item)">Editar</button>
        <a href="#" @click="concluirTarefa(item)">concluir</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.concluida {
  text-decoration: line-through;
}
</style>
