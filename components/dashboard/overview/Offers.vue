<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel'
import Gift from '~/components/dashboard/overview/Gift.vue'

const plugin = Autoplay({
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,

})
</script>
<template>
    <Carousel class="relative w-full " :plugins="[plugin]" @mouseenter="plugin.stop" :show-indicators="false"
        @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];">
        <CarouselContent>
            <CarouselItem>
                <Gift />
            </CarouselItem>
            <CarouselItem>
                <Gift />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>