import { ref, onMounted, onUnmounted } from "vue";

export function useMousePos() {
  const x = ref(0);
  const y = ref(0);

  function mouseUpdate(event: MouseEvent): void {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", mouseUpdate);
  });
  onUnmounted(() => window.removeEventListener("mousemove", mouseUpdate));
  return { x, y };
}
