    <script lang="ts" setup>

</script>
<template>
    <div
        class=" p4 shadow-2xl bg-stone-50 dark:bg-stone-950 max-w-md border border-stone-800  dark:!text-stone-100 overflow-hidden rounded-3xl grid place-items-center gap-6">
        <slot name="illustration"></slot>
        <div class="p6 rounded-3xl bg-stone-200 bg-op-40 dark:bg-stone-600 dark:bg-op-10 border dark:border-stone-900 ">
            <!-- <slot name="icon"></slot> -->
            <slot name="text"></slot>
        </div>
    </div>
</template>


