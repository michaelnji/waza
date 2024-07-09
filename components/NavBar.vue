<script setup lang="ts">
import Logo from './Logo.vue';</script>
<template>
    <div class="fixed w-full top-0 border-b left-0 right-0 bg-white z-1">
        <div class="flex wfull justify-between p3 md:hidden">
            <Logo />
            <div class="flex items-center gap-3">
                <Button class=" !text-stone-950 hover:!text-indigo-500 !border-0" text aria-label="Bell">
                    <Icon name="solar:bell-linear" size="32"></Icon>
                </Button>
                <Avatar label="M"
                    class="font-display text-xl md:text-3xl font-extrabold hidden md:block !bg-stone-100 !rounded-full"
                    size="normal" />
                <Avatar label="M" size="large"
                    class="font-display  font-extrabold  md:hidden !bg-stone-100 !rounded-full" />
            </div>


        </div>
    </div>
    <div class="  right-0 hidden md:block bg-white z-1">
        <div class="flex wfull justify-end p3">
            <div class="flex items-center gap-3">
                <Button class=" !text-stone-950 hover:!text-indigo-500 !border-0" text aria-label="Bell">
                    <Icon name="solar:bell-linear" size="32"></Icon>
                </Button>
                <Avatar label="M" class="font-display text-xl font-extrabold  !bg-stone-100 !rounded-full"
                    size="large" />

            </div>


        </div>
    </div>
</template>