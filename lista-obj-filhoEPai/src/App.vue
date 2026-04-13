<script setup>
import { computed, ref } from 'vue'
import TarefaItem from './components/TarefaItem.vue'

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

const filtro = ref('')

const tarefasFiltradas = computed(() => {
  if (filtro.value.trim().length > 0) {
    return tarefas.value.filter((item) => item.tarefa.includes(filtro.value))
  } else {
    return tarefas.value
  }
})

function alerta(mensagem) {
  alert(`O status desta tarefa é ${mensagem}`)
}
</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <ul>
      <TarefaItem v-for="tarefa in tarefasFiltradas" :key="tarefa.id" :id="tarefa.id" :tarefa="tarefa.tarefa" :status="tarefa.status" @clique="alerta">
        {{ tarefa.tarefa }}
      </TarefaItem>
    </ul>
    <input type="text" placeholder="Filtrar tarefa" v-model="filtro" />
  </div>
</template>

<style scoped></style>
