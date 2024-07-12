<script setup lang="ts">
definePageMeta({
    layout: "dashboard"
})
useHead({
    title: 'Airtime',
    meta: [
        { name: 'description', content: 'Airtime' }
    ],
})
let currentTab = ref('airtime')
let chosenProvider = ref('none')

</script>

<template>
    <div class="xl:max-w-5xl max-w-md md:mxa pb-12">
        <div class="px-5 md:px-0">

            <div class="xl:grid xl:grid-cols-2  space-y-6 xl:space-y-0 xl:gap-y-6 md:gap-x-24 !w-full ">
                <div class="w-full ">
                    <DashboardAirtimeTabSection @tab-change="(e) => currentTab = e" />
                    <div v-if="currentTab === 'airtime'" class="mt-8">
                        <DashboardAirtimeTab />
                    </div>
                    <div v-if="currentTab === 'internet'" class="mt-8">
                        <DashboardAirtimeInternetTab />
                    </div>
                </div>
                <div class="!mt16 xl:mt-0">
                    <div class="lg:p-6 lg:border dark:border-stone-900 rounded-2xl">
                        <div class=" mb-6 ">
                            <h1 class="font-medium text-xl">Recent Purchases</h1>
                        </div>
                        <DashboardTransactions />
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>