<script setup lang="ts">
const invoices = [
    {
        id: 'WZ24623',
        paymentStatus: 'success',
        totalAmount: '250.00',
        paymentType: 'Artime',
        icon: 'solar:hashtag-square-bold',
        date: '2024-07-10T09:57:35+0000'
    },
    {
        id: 'WZ43293',
        paymentStatus: 'pending',
        totalAmount: '150.00',
        paymentType: 'DSTV',
        icon: 'solar:home-wifi-bold',
        date: '2024-07-10T09:57:35+0000'
    },
    {
        id: 'WZ10293',
        paymentStatus: 'failed',
        totalAmount: '350.00',
        paymentType: 'Data',
        icon: 'solar:transfer-vertical-bold',
        date: '2024-06-17T09:57:35+0000'

    },
    {
        id: 'WZ99078',
        paymentStatus: 'success',
        totalAmount: '450.00',
        paymentType: 'Electricity',
        icon: 'solar:bolt-bold',
        date: '2024-07-07T09:57:35+0000'

    },

    {
        id: 'WZ10201',
        paymentStatus: 'pending',
        totalAmount: '2450.00',
        paymentType: 'Cable TV',
        icon: 'solar:tv-bold',
        date: '2024-07-10T09:57:35+0000'

    },

]
</script>

<template>


    <div class="grid gap-y-3">
        <div class="p-3 bg-stone-50 dark:bg-stone-900 rounded-xl  flex items-center justify-between"
            v-for="item in invoices" :key="item.id">
            <div class="flex gap-3 items-center">
                <div
                    class="p-1 size-10 grid place-items-center rounded-full bg-purple-500 text-purple-500 dark:text-purple-300 bg-opacity-10">
                    <Icon :name="item.icon" size="24" />
                </div>
                <div>
                    <h2 class="font-medium text-base"> {{ item.paymentType }}</h2>
                    <span class="text-xs opacity-60 ">{{ item.id }}</span>
                </div>
            </div>
            <div class="">
                <p class="text-base flex font-normal  items-center gap-x-0.5">
                    <Naira size="sm" /> {{ item.totalAmount }}
                </p>
                <p class="text-sm opacity-60">{{ getReadableDate(item.date) }}</p>
            </div>
        </div>
    </div>

</template>