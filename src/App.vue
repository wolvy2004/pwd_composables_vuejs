<template>
  <main>
    <div>
      <div class="bar"></div>
      <div
        style="
          position: fixed;
          top: 0;
          left: 0;
          margin: 1rem;
          font-size: 0.75rem;
          text-align: left;
          background-color: #333;
          padding: 0.5rem;
        "
      >
        <p>
          pos scroll: {{ Math.ceil(scrollPos) }} <br />
          altura del documento:{{ winHeigth }} <br />
          tamaño ventana : {{ windowX }} : {{ windowY }} <br />
          posicion del raton {{ x }} : {{ y }}
        </p>
      </div>

      <div>
        <input type="text" name="" v-model="saludo" />
        <p>{{ saludo }}</p>
      </div>
      <div>
        <button
          v-for="(_, componente) in componentes"
          :key="componente"
          @click="current_component = componente"
          :class="['button', { selected: componente === current_component }]"
        >
          {{ componente }}
        </button>
      </div>
      <div
        class="contenedor"
        ref="el_comp"
        :style="{
          overflowY: windowY > 400 ? 'scroll' : 'hidden',
          maxHeight: '600px',
        }"
      >
        <transition name="tabs" mode="out-in">
          <keep-alive>
            <component :is="componentes[current_component]" class="tab" />
          </keep-alive>
        </transition>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import ComponentC from "./components/ComponentC.vue";
import { useScrollPos } from "./composables/scroll";
import { useMousePos } from "./composables/mouse";
import { useWindow } from "./composables/window";

type ComponentKey = keyof typeof componentes;
const componentes = { ComponentA, ComponentB, ComponentC };

const { scrollPos } = useScrollPos();
const { x, y } = useMousePos();
const el_comp = ref(null);
const { windowX, windowY, winHeigth } = useWindow(el_comp);
const saludo = ref("");
const current_component = ref<ComponentKey>("ComponentA");
saludo.value = " saludo del setup 😕 | ";

console.log(saludo.value);
</script>

<style scoped>
.selected {
  background-color: rgb(7, 184, 24);
}

.button {
  z-index: 10;
}

.tab {
  margin: 0 auto;
  background-color: #3f3f3f;

  z-index: 1;
}

main {
  height: 100vh;
}

.tabs-enter-from,
.tabs-leave-to {
  opacity: 0;
  transform: translateY(-150px);
}

.contenedor {
  overflow-y: scroll;
}

.tabs-enter-active,
.tabs-leave-active {
  transition: 0.5s ease-in-out all;
}
</style>
