<script setup lang="ts">

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
    <div class="xl:max-w-5xl max-w-xl md:mxa ">
        <div class="p-5">
            <DashboardOverviewGreetings />
        </div>
        <div class="mt-2 w-full ">
            <div class="xl:grid xl:grid-cols-2 space-y-6 xl:space-y-0 xl:gap-y-6 md:gap-x-24 !w-full">
                <div class="w-full">
                    <DashboardOverviewWalletDisplay />
                    <div class="lg:mt-12 mt-8 md:p0 px5">
                        <h1 class="font-normal text-lg">What do you need?</h1>
                        <div class="mt-4">
                            <DashboardOverviewShortcuts />
                        </div>
                    </div>
                    <div class="mt-8 mb-6 px5 md:px0 ">
                        <DashboardOverviewOffers />
                    </div>
                </div>
                <div class="">
                    <div class="p-5 lg:border dark:border-stone-900 rounded-2xl">
                        <div class="flex mb-6 justify-between items-center">
                            <h1 class="font-medium text-xl">Recent Activity</h1>
                            <NuxtLink to="/transactions" class="text-amber-500 font-medium text-base">see more
                            </NuxtLink>
                        </div>
                        <DashboardTransactions />
                    </div>
                </div>
            </div>
            <div class="mt-12">

            </div>
        </div>
    </div>

</template>