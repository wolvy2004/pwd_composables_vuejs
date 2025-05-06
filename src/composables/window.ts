import { ref, onMounted, onUnmounted, watch, type Ref } from "vue";

export function useWindow(targetRef: Ref<HTMLElement | null>) {
  const winHeigth = ref(0);
  const windowX = ref(0);
  const windowY = ref(0);
  let observer: ResizeObserver | null = null;

  const windowUpdate = () => {
    if (targetRef.value) {
      windowX.value = targetRef.value.offsetWidth;
      windowY.value = targetRef.value.offsetHeight;
    }
  };

  onMounted(() => {
    watch(
      targetRef,
      (el) => {
        if (observer) observer.disconnect();
        if (el) {
          observer = new ResizeObserver(windowUpdate);
          observer.observe(el);
          windowUpdate();
        } else if (observer) observer.disconnect();
      },
      { immediate: true }
    );
  });
  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
  return { winHeigth, windowX, windowY };
}
