<script setup lang="ts">
import Greetings from '~/components/dashboard/overview/Greetings.vue';
import WalletDisplay from '~/components/dashboard/overview/WalletDisplay.vue';
import Shortcuts from '~/components/dashboard/overview/Shortcuts.vue';
import Transactions from '~/components/dashboard/overview/Transactions.vue';
import Offers from '~/components/dashboard/overview/Offers.vue';

definePageMeta({
    layout: "dashboard"
})
useHead({
    title: 'Home',
    meta: [
        { name: 'description', content: 'Your favourite bill vendor' }
    ],
})
</script>

<template>
    <div class="xl:max-w-5xl max-w-xl md:mxa !w-full">
        <div class="p-3">
            <Greetings />
        </div>
        <div class="mt-2 w-full ">
            <div class="grid xl:grid-cols-2 gap-y-6 md:gap-x-24 !w-full">
                <div class="w-full">
                    <WalletDisplay />
                    <div class="lg:mt-12 mt-8 md:p0 p-3">
                        <h1 class="font-normal text-lg">What do you need?</h1>
                        <div class="mt-4">
                            <Shortcuts />
                        </div>
                    </div>
                    <div class="mt-6 px3">
                        <Offers />
                    </div>
                </div>
                <div class="">
                    <div class="lg:p-6 p-3 lg:border dark:border-stone-900 rounded-2xl">
                        <div class="flex mb-6 justify-between items-center">
                            <h1 class="font-medium text-xl">Recent Activity</h1>
                            <NuxtLink to="/transactions" class="text-amber-500 font-medium text-base">see more
                            </NuxtLink>
                        </div>
                        <Transactions />
                    </div>
                </div>
            </div>
            <div class="mt-12">

            </div>
        </div>
    </div>

</template>