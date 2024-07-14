<script setup lang="ts">
const emit = defineEmits<{
    (e: 'tab-change', tab: string): void
}>()
const props = defineProps<{
    tab: string
}>()

function changeTabs(tab: string
) {

    emit("tab-change", tab)

}

</script>
<template>
    <div ref="el" class="w-full grid grid-cols-2 bg-stone-100 dark:bg-stone-950 p-3 rounded-xl gap-x-3 relative">
        <button class="flex z-1  cursor-pointer items-center justify-center " @click="changeTabs('airtime')">
            <h2 class="text-xl font-medium">Airtime</h2>
        </button>
        <button class="flex z-1  cursor-pointer items-center justify-center " @click="changeTabs('internet')">
            <h2 class="text-xl font-medium">Internet</h2>
        </button>
        <div class="absolute w-1/2  top-2 bottom-2 bg-white dark:bg-stone-900 p-3 rounded-lg transition duration-300 ease-out"
            :class="{
    'translate-x-2': tab === 'airtime',
    'c': tab === 'internet'
            }">
        </div>
    </div>
</template>

<style>
.c {
    transform: translateX(calc(100% - 0.5rem));
}
</style>