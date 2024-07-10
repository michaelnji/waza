<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel'
import Gift from '~/components/dashboard/overview/Gift.vue'
import Referrals from './Referrals.vue';

const plugin = Autoplay({
    delay: 5000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,

})
</script>
<template>
    <Carousel class="relative w-[90%] " :plugins="[plugin]" @mouseenter="plugin.stop" :show-navigators="false"
        :show-indicators="false" @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];">
        <CarouselContent>
            <CarouselItem>
                <Gift />
            </CarouselItem>
            <CarouselItem>
                <Referrals />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>