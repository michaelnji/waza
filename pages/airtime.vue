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
let chosenProvider = ref('none')

</script>

<template>
    <div class="xl:max-w-5xl max-w-md md:mxa pb-12">
        <div class="px-5 md:px-0">

            <div class="xl:grid xl:grid-cols-2  space-y-6 xl:space-y-0 xl:gap-y-6 md:gap-x-24 !w-full ">
                <div class="w-full ">
                    <TabSection @tab-change="(e) => currentTab = e" />
                    <div v-if="currentTab === 'airtime'">
                        <div class="mt-8">
                            <h1 class=" text-3xl font-medium  font-display"> Buy Airtime</h1>
                            <p class="opacity-70">Get your airtime at the best prices</p>
                        </div>
                        <div class="mt-6 p-5 bg-purple-700 text-purple-50 rounded-xl">
                            <h1 class=" text-xl font-medium"> Choose a network</h1>
                            <div class="mt-4">
                                <Providers @choose-provider="(e) => chosenProvider = e" />
                            </div>
                            <div class="mt-8">
                                <Button size="lg"
                                    class="px6 py2 w-full shadow-none rounded-full text-stone-950 font-400 text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-500 active:scale-95 transition font-display  ease-in"
                                    :disabled="chosenProvider && chosenProvider === 'none'">
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