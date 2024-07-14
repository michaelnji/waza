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
const el = ref(null)
const { isSwiping, direction } = useSwipe(el);
watch(isSwiping, () => {
    if (direction.value === "right") currentTab.value = "airtime"
    if (direction.value === "left") currentTab.value = "internet"
})
</script>

<template>
    <div ref="el" class="xl:max-w-5xl max-w-md md:mxa pb-12">
        <div class="px-5 md:px-0">

            <div class="xl:grid xl:grid-cols-2  space-y-6 xl:space-y-0 xl:gap-y-6 md:gap-x-24 !w-full ">
                <div class="w-full overflow-hidden relative">
                    <DashboardAirtimeTabSection @tab-change="(e) => currentTab = e" :tab="currentTab" />
                    <div class="mb-6 mt8">
                        <div v-if="currentTab === 'airtime'">
                            <h1 class=" text-3xl font-medium  font-display"> Buy Airtime</h1>
                            <p class="opacity-70">Get your airtime at the best prices</p>
                        </div>
                        <div v-if="currentTab === 'internet'">
                            <h1 class=" text-3xl font-medium  font-display"> Buy Internet</h1>
                            <p class="opacity-70">Get more megabytes for less</p>
                        </div>
                    </div>

                    <TransitionGroup
                        :name="direction === 'right' || currentTab === 'airtime' ? 'slide-right' : 'slide-left'">
                        <DashboardAirtimeTab key="airtime" v-if="currentTab === 'airtime'" />

                        <DashboardAirtimeInternetTab key="internet" v-if="currentTab === 'internet'" />
                    </TransitionGroup>




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
<style>
.list-move,
/* apply transition to moving elements */
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.5s ease;
}


.slide-right-leave-to {
    opacity: 0.9;
    transform: translateX(500px);
}

.slide-right-enter-from {

    transform: translateX(-500px);
}


.slide-right-leave-active {
    position: absolute;
}

.list-move,
/* apply transition to moving elements */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.5s ease;
}


.slide-left-leave-to {
    opacity: 0.9;
    transform: translateX(-500px);
}

.slide-left-enter-from {

    transform: translateX(500px);
}


.slide-left-leave-active {
    position: absolute;
}
</style>