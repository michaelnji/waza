<script setup lang="ts">
import { Button } from '~/components/ui/button';
let chosenProvider = ref('none')
let providerName = computed(() => {
    if (chosenProvider.value === "none") return "Choose provider"
    if (chosenProvider.value === "ipnx") return "Buy ipNX data"
    if (chosenProvider.value === "smile") return "Buy Smile data"
    return "Buy  " + chosenProvider.value.toUpperCase() + " data"
})
</script>
<template>
    <div>
        <h1 class=" text-3xl font-medium  font-display"> Buy Internet</h1>
        <p class="opacity-70">Get more megabytes for less</p>
    </div>
    <div class="mt-6 p-5 bg-purple-700 text-purple-50 rounded-xl">
        <h1 class=" text-xl font-medium"> Choose a provider</h1>
        <div class="mt-4">
            <DashboardAirtimeDataProviders @choose-provider="(e) => chosenProvider = e" />
        </div>
        <div class="mt-8">
            <Button size="lg" style="word-spacing: 2px;"
                class="p6  w-full shadow-none rounded-full text-stone-950 font-medium text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-300 active:scale-95 transition font-display  ease-in disabled:opacity-80 disabled:text-op-50 disabled:cursor-not-allowed disabled:hover:bg-amber-400 disabled:dark:hover:bg-amber-400 disabled:touch-none disabled:active:scale-100"
                :disabled="chosenProvider && chosenProvider === 'none'">
                {{ providerName }}
            </Button>
        </div>
    </div>
</template>