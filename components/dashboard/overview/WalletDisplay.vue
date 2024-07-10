        <script setup lang="ts">
        import { Button } from '~/components/ui/button';
</script>
<template>
    <div
        class="w-full max-w-xl p-6 dark:border-stone-800 md:pt-6 md:rounded-2xl flex flex-col  md:flex-row md:items-center justify-between bg-stone-100 border dark:bg-stone-900">
        <div>
            <p class="font-medium opacity-50   text-sm">ACCOUNT BALANCE</p>
            <h1 class="font-bold font-display flex  items-center text-5xl ">
                <span class=" mr-2 text-purple-800  font-body">
                    <Naira />
                </span>2345.33
            </h1>
        </div>
        <div class="flex items-center mt-4 md:mt-0 gap3">
            <Button size="lg"
                class="px6 py2 shadow-none rounded-full text-stone-950 font-400 text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-600 active:scale-95 transition ease-in">

                Add
                funds
            </Button>
        </div>
    </div>
</template>