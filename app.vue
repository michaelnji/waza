<script setup lang="ts">
import Toaster from './components/ui/toast/Toaster.vue';
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Waza - ${titleChunk}` : 'Waza';
  }
})
const colorMode = useColorMode()
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Toaster />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


