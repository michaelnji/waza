<script setup lang="ts">
import Providers from '~/components/dashboard/airtime/providers.vue';
import Transactions from "~/components/dashboard/Transactions.vue";
import TabSection from '~/components/TabSection.vue';
import { Button } from '~/components/ui/button';
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

</script>

<template>
    <div class="xl:max-w-5xl max-w-xl md:mxa ">
        <div class="px-5 md:px-0">

            <div class="xl:grid xl:grid-cols-2  space-y-6 xl:space-y-0 xl:gap-y-6 md:gap-x-24 !w-full ">
                <div class="w-full ">
                    <TabSection @tab-change="(e) => currentTab = e" />
                    <div v-if="currentTab === 'airtime'">
                        <div class="mt-8">
                            <h1 class=" text-3xl font-medium  font-display"> Buy Airtime</h1>
                            <p class="opacity-70">Get your airtime at the best prices</p>
                        </div>
                        <div class="mt-6">
                            <h1 class=" text-xl "> Choose a network</h1>
                            <div class="mt-4">
                                <Providers />
                            </div>
                            <div class="mt-8">
                                <Button size="lg"
                                    class="px6 py2 w-full shadow-none rounded-full text-stone-950 font-400 text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-500 active:scale-95 transition font-display md:max-w-sm max-w-xs ease-in">

                                    Continue
                                </Button>
                            </div>
                        </div>
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
                        <div class="flex mb-6 justify-between items-center">
                            <h1 class="font-medium text-xl">Recent Purchases</h1>
                            <NuxtLink to="/transactions" class="text-amber-500 font-medium text-base">see more
                            </NuxtLink>
                        </div>
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>