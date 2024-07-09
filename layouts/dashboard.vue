<script setup lang="ts">
import SideBar from '~/components/SideBar.vue';
import NavBar from '~/components/NavBar.vue';
</script>
<template>
    <div class="md:flex font-body font-light w-full">
        <div class=" md:flex-shrink-0 md:p-6 md:h-screen md:flex md:items-center ">
            <SideBar />
        </div>
        <main class="md:flex-grow-1 md:p-6 md:pl-13 xl:pl-0">
            <div class="md:mb-4">
                <NavBar />
            </div>
            <div class=" py-12 md:py-0 !overflow-x-hidden wfull">
                <slot />
            </div>

        </main>
    </div>
</template>
