<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Waza - ${titleChunk}` : 'Waza';
  }
})
const colorMode = useColorMode()
colorMode.preference = "dark"
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


