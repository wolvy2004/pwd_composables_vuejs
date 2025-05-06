<template>
    <div>
        <h2>Component C</h2>
        <label for="check_select" class="id"> Selecciona una opcion</label>
        <div>
            <label for="accept">Aceptas los terminos</label>
            <input type="checkbox" v-model="accept">
            <button @click="showAlert()" :disabled="!accept">Siguiente</button>
            <p> he aceptado los terminos no he aceptados los terminos</p>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const accept = ref(false)
const showAlert = () => {
    alert("acepto los terminos y sigue")
}

</script>

<style scoped></style>