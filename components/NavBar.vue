<script setup lang="ts">
import Logo from './Logo.vue';</script>
<template>
    <div
        class="fixed w-full top-0 border-b border-stone-100 dark:border-stone-900 left-0 right-0 bg-white dark:bg-stone-950 z-1">
        <div class="flex wfull justify-between p3 md:hidden">
            <Logo />
            <div class="flex items-center gap-3">
                <Button class=" !text-stone-950 dark:!text-stone-50 hover:!text-amber-400 !border-0" text
                    aria-label="Bell">
                    <Icon name="solar:bell-linear" size="24"></Icon>
                </Button>
                <Avatar label="M" size='large'
                    class="font-display font-extrabold  !bg-stone-100 dark:!bg-stone-900 !rounded-full" />

            </div>


        </div>
    </div>
    <div class="  right-0 hidden md:block bg-white dark:bg-stone-950 z-1">
        <div class="flex wfull justify-end p3">
            <div class="flex items-center gap-3">
                <Button class=" !text-stone-950 dark:!text-stone-50 hover:!text-amber-400 !border-0" text
                    aria-label="Bell">
                    <Icon name="solar:bell-linear" size="32"></Icon>
                </Button>
                <Avatar label="M"
                    class="font-display text-xl font-extrabold  !bg-stone-100 !rounded-full dark:!bg-stone-900"
                    size="large" />

            </div>


        </div>
    </div>
</template>