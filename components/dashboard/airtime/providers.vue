<script setup lang="ts">
import MTN from '~/assets/images/logos/mtn.svg'
import Airtel from '~/assets/images/logos/airtel.svg'
import Glo from '~/assets/images/logos/glo.svg'
import Mobile from '~/assets/images/logos/9mobile.svg'
</script>
<template>
    <div class="grid grid-cols-4 gap-3 md:max-w-sm max-w-xs">
        <div class="p-2 border grid gap-y-2 rounded-2xl">
            <img :src="MTN" alt="MTN Logo" class="w-full rounded-xl">
            <!-- <h3 class="mt-2 text-base font-display font-medium mxa ">MTN</h3> -->
        </div>
        <div class="p-2 border grid gap-y-2 rounded-2xl">
            <img :src="Airtel" alt="MTN Logo" class="w-full ">
            <!-- <h3 class="mt-2 text-base font-display font-medium mxa ">Airtel</h3> -->
        </div>
        <div class="p-2 border grid gap-y-2 rounded-2xl">
            <img :src="Glo" alt="MTN Logo" class="w-full ">
            <!-- <h3 class="mt-2 text-base font-display font-medium mxa ">Glo</h3> -->
        </div>
        <div class="p-2 border grid gap-y-2 rounded-2xl">
            <img :src="Mobile" alt="MTN Logo" class="w-full ">
            <!-- <h3 class="mt-2 text-base font-display font-medium mxa ">9Mobile</h3> -->
        </div>
    </div>
</template>