import { ref, onMounted, onUnmounted } from "vue";

export function useScrollPos() {
  const scrollPos = ref(0);

  function scrollUpdate() {
    scrollPos.value = window.scrollY;
  }

  onMounted(() => {
    scrollUpdate();
    window.addEventListener("scroll", scrollUpdate);
  });
  onUnmounted(() => window.removeEventListener("scroll", scrollUpdate));
  return { scrollPos };
}
