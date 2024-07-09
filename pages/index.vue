<script setup lang="ts">
import Greetings from '~/components/dashboard/overview/Greetings.vue';
import WalletDisplay from '~/components/dashboard/overview/WalletDisplay.vue';
import Shortcuts from '~/components/dashboard/overview/Shortcuts.vue';
import Transactions from '~/components/dashboard/overview/Transactions.vue';

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
    <div class="max-w-7xl mxa">
        <Greetings />
        <div class="mt-6">
            <div class="grid grid-cols-2 gap-x-24">
                <div class="">
                    <WalletDisplay />
                    <div class="mt-12">
                        <h1 class="font-medium text-2xl">What do you need?</h1>
                        <div class="mt-6">
                            <Shortcuts />
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="p-6 border rounded-2xl">
                        <h1 class="font-medium text-2xl mb-6">Recent Payments</h1>
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>