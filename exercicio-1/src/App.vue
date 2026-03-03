<script setup>
import { ref } from 'vue'

const contador = ref(1)
function incrementar(valor) {
  if (!Number.isNaN(valor)) {
    contador.value += valor
  }
  if (contador.value >= 10) {
    contador.value = 10
  }
}

function decrementar(valor) {
  if (!Number.isNaN(valor)) {
    contador.value -= valor
  }

  if (contador.value <= 0) {
    contador.value = 0
  }
}
</script>



<template>
  <main>
    <h1>Contador:  {{ contador }}</h1>
    <label>Valor a incrementar/decrementar: </label>
    <input type="number" v-model="valor" max="10" min="1" />

    <div>
      <button :disabled="contador >= 10" @click="incrementar(Number(valor))" >incrementar</button>
      <button :disabled="contador <= 0" @click="decrementar(Number(valor))">decrementar</button>
    </div>

    <div class="alert" v-if="contador >= 10">
      <p>Contador não pode ser maior que 10!</p>
    </div>

    <div class="alert" v-if="contador <= 0">
      <p>Contador não pode ser menor de 0!</p>
    </div>
  </main>
</template>



<style scoped>
header {
  line-height: 1.5;
}

div.alert {
  background-color: rgb(114, 12, 12);
  text-align: center;
  margin: 0 auto;
  border-radius: 2px;
}

h1 {
  color: #ff4000;
  text-align: center;
}

button {
  background-color: #ff4000;
  color: white;
  border: 0;
  border-radius: 10px;
  margin: 10px 15px;
  padding: 12px 10px;
  font-weight: bold;
}

button:disabled {
  background-color: red;
}

input {
  width: 50px;
}
</style>
