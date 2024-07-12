<script setup lang="ts">
import AirtimeTab from "~/components/dashboard/airtime/AirtimeTab.vue";
import TabSection from '~/components/dashboard/airtime/TabSection.vue';
import Transactions from "~/components/dashboard/Transactions.vue";
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
                    <TabSection @tab-change="(e) => currentTab = e" />
                    <div v-if="currentTab === 'airtime'" class="mt-8">
                        <AirtimeTab />
                    </div>
                    <div v-if="currentTab === 'internet'">
                        <div class="mt-8">
                            <h1 class=" text-3xl font-medium  font-display"> Buy Internet</h1>
                            <p class="opacity-70">Get more for less.</p>
                        </div>
                        <!-- <div class="mt-6">
                            <h1 class=" text-xl "> Choose a network</h1>
                            <div class="mt-4">
                                <Providers />
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="!mt-18 xl:mt-0">
                    <div class="lg:p-6 lg:border dark:border-stone-900 rounded-2xl">
                        <div class=" mb-6 ">
                            <h1 class="font-medium text-xl">Recent Purchases</h1>
                        </div>
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>