<template>
    <div>
        <h2>Component B</h2>
        <form>
            <label for="">nombre</label>
            <input type="text" v-model="nombre" />
            <label for="">apellido</label>
            <input type="text" v-model="apellido" />
        </form>
        <p> su nombre y apellido es: {{ nombre }} {{ apellido }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';


const nombre = ref("");
const apellido = ref("");

</script>

<style scoped></style>
