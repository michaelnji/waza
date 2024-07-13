<script setup lang="ts">
definePageMeta({
    layout: "dashboard"
})
useHead({
    title: 'Bills',
    meta: [
        { name: 'description', content: 'Bills' }
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
                    <DashboardBillsBillSelection />
                </div>
                <div class="!mt16 xl:mt-0">
                    <div class="lg:p-6 lg:border dark:border-stone-900 rounded-2xl">
                        <div class=" mb-6 ">
                            <h1 class="font-medium text-xl">Recent Payments</h1>
                        </div>
                        <DashboardTransactions />
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>