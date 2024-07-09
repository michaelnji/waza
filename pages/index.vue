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
    <div class="md:max-w-6xl md:mxa !w-full">
        <div class="hidden md:block">
            <Greetings />
        </div>
        <div class="mt-6 w-full ">
            <div class="grid xl:grid-cols-2 gap-y-6 md:gap-x-24 !w-full">
                <div class="w-full">
                    <WalletDisplay />
                    <div class="lg:mt-12 mt-8 md:p0 p-3">
                        <h1 class="font-medium text-xl">What do you need?</h1>
                        <div class="mt-6">
                            <Shortcuts />
                        </div>
                    </div>
                </div>
                <div class="md:p0 p-3">
                    <div class="p-6 border rounded-2xl overflow-x-scrol">
                        <h1 class="font-medium text-xl mb-6">Recent Payments</h1>
                        <Transactions />
                    </div>
                </div>
            </div>
            <div class="mt-12">
                <Offers />
            </div>
        </div>
    </div>

</template>