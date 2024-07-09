<script setup lang="ts">
import SideBar from '~/components/SideBar.vue';
import NavBar from '~/components/NavBar.vue';
</script>
<template>
    <div class="flex font-body font-light">
        <div class="p6 flex-shrink-0 flex h-screen items-center ">
            <SideBar />
        </div>
        <main class="flex-grow-1 p-6">
            <div class="mb-4">
                <NavBar />
            </div>
            <div class="">
                <slot />
            </div>

        </main>
    </div>
</template>
