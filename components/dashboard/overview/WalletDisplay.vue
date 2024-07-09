        <script setup lang="ts">
        import { Button } from '~/components/ui/button'
</script>
<template>
    <div class="p-6 rounded-2xl flex items-center justify-between bg-stone-100 ">
        <div>
            <p class="font-medium opacity-50  ">ACCOUNT BALANCE</p>
            <h1 class="font-bold font-display text-6xl">
                <small class=" mr-2 text-indigo-500 text-4xl">NGN</small>500K
            </h1>
        </div>
        <div class="flex items-center gap3">
            <Button size="lg"
                class="px6 py2 rounded-xl font-400 text-xl bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition ease-in">

                Add
                funds
            </Button>
        </div>
    </div>
</template>