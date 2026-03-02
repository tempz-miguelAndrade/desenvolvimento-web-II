<script setup>
import { ref } from 'vue'

const number = ref("");
const contador = ref(0);

function incrementar() {
  if (contador.value < 10) {
    contador.value++
  }
}

function decrementar() {
  if (contador.value > 0) {
    contador.value--
  }

  const mostrar = ref(false);

}
</script>

<template>
  <div>
    <p>contador: {{ contador }}</p>
    <br />
    <p>Valor de incrementar/decrementar</p>
    <div>
      <input type="number" v-model="number" min="1" max="10" value="1">
    </div>
    <div>
      <button :disabled="contador >= 10" @click="incrementar()">Incrementar</button>
      <button :disabled="contador <= 0" @click="decrementar()">Decrementar</button>
      <p v-if="!mostrar">Não pode ser acima de 10!</p>
      <p v-if="!mostrar">Não pode ser abaixo de 0!</p>
    </div>
  </div>
</template>

<style scoped></style>
