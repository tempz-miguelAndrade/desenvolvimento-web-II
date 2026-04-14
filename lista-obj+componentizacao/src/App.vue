<script setup>
import { ref, computed, watch } from 'vue'
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

const novaTarefa = ref('')
const posAlterada = ref(null)
const filtro = ref('')

function addTarefa(item) {
  if (novaTarefa.value.trim().length >= 5) {
    if (posAlterada.value == null) {
      tarefas.value.push({
        id: tarefas.value.length ? tarefas.value[tarefas.value.length - 1].id + 1 : 1,
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

const tarefasFiltradas = computed(() => {
  if (filtro.value.trim().length > 0) {
    return tarefas.value.filter((item) => item.tarefa.includes(filtro.value))
  } else {
    return tarefas.value
  }
})

const concluidas = ref(tarefasFiltradas.value.filter((item) => item.status == 'concluida').length)
const pendentes = ref(tarefasFiltradas.value.filter((item) => item.status == 'pendente').length)

watch(tarefas.value, () => {
  concluidas.value = tarefasFiltradas.value.filter((item) => item.status == 'concluida').length
  pendentes.value = tarefasFiltradas.value.filter((item) => item.status == 'pendente').length
})
watch(tarefasFiltradas, () => {
  concluidas.value = tarefasFiltradas.value.filter((item) => item.status == 'concluida').length
  pendentes.value = tarefasFiltradas.value.filter((item) => item.status == 'pendente').length
})

</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa" placeholder="adicione algo a lista..." class="add"/>
    <button @click="addTarefa(novaTarefa)" class="add">Adicionar</button>
    <div class="contador-div">
      <p>Pendentes: {{ pendentes }} <span> Concluídas: {{ concluidas }}</span></p>
    </div>

    <ul>
      <TarefaItem
        v-for="item in tarefasFiltradas"
        :key="item.id"
        :item="item"
        @deletar="delTarefa"
        @editar="editTarefa"
        @concluir="concluirTarefa"
      />
    </ul>

    <div class="filtro-div">
      <h2>Filtro de lista</h2>
      <input type="text" v-model="filtro" placeholder="digite o que deseja filtrar..." class="filtro-input"/>
    </div>
  </div>
</template>

<style scoped>

.container h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 2vw;
}

.container h2 {
  font-size: 1.5rem;
  color: white;
}
.container button.add, input {
  margin-bottom: 1vw;
}

.container ul {
  margin-bottom: 2vw;
}

.container .contador-div span{
  margin-left: 1vw;
}

.container .contador-div p {
  color: lightgray;
}

.container .contador-div {
  margin-bottom: 1vw;
}
</style>
