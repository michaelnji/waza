<script setup lang="ts">
import Slider from '~/components/Slider.vue';
definePageMeta({
    layout: "dashboard"
})
useHead({
    title: 'Settings',
    meta: [
        { name: 'description', content: 'Settings' }
    ],
})
</script>

<template>
    <Slider />

</template>