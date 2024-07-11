<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import Providers from '~/components/dashboard/airtime/providers.vue';
definePageMeta({
    layout: "dashboard"
})
useHead({
    title: 'Airtime',
    meta: [
        { name: 'description', content: 'Airtime' }
    ],
})
</script>

<template>
    <div class="xl:max-w-5xl max-w-xl md:mxa ">
        <div class="px-3 md px-0">
            <Tabs default-value="airtime" class="min-w-full">
                <TabsList>
                    <TabsTrigger value="airtime">
                        Airtime
                    </TabsTrigger>
                    <TabsTrigger value="internet">
                        Internet
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="airtime">
                    <div class="mt-6">
                        <h1 class=" text-3xl font-medium  font-display"> Airtime</h1>
                        <p class="opacity-70">Get your airtime at the best prices</p>
                    </div>
                    <div class="mt-6">
                        <h1 class=" text-xl "> Choose a network</h1>
                        <div class="mt-4">
                            <Providers />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="internet">
                    <div class="mt6">
                        <h1 class=" text-3xl font-medium  font-display"> Internet</h1>
                        <p class="opacity-70">More megabytes for less.</p>
                    </div>
                </TabsContent>
            </Tabs>

        </div>

    </div>

</template>