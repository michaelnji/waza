<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table'
import { Badge } from '~/components/ui/badge'

const invoices = [
    {
        id: 'INV001',
        paymentStatus: 'success',
        totalAmount: '250.00',
        paymentType: 'Artime',
        icon: 'solar:chart-square-bold'
    },
    {
        id: 'INV002',
        paymentStatus: 'pending',
        totalAmount: '150.00',
        paymentType: 'DSTV',
        icon: 'solar:home-wifi-bold'
    },
    {
        id: 'INV003',
        paymentStatus: 'failed',
        totalAmount: '350.00',
        paymentType: 'Data',
        icon: 'solar:transfer-vertical-bold'

    },
    {
        id: 'INV004',
        paymentStatus: 'success',
        totalAmount: '450.00',
        paymentType: 'Electricity',
        icon: 'solar:bolt-bold'

    },

    {
        id: 'INV006',
        paymentStatus: 'pending',
        totalAmount: '2450.00',
        paymentType: 'Cable TV',
        icon: 'solar:tv-bold'

    },

]
</script>

<template>

    <!-- <Table class="md:text-lg hidden lg:block ">
        <TableCaption>A list of your recent payments <NuxtLink to="/transactions" class="underline">see more
            </NuxtLink>
        </TableCaption>
        <TableHeader>
            <TableRow class="dark:border-stone-900">
                <TableHead class="w-[100px] md:wmax">
                    ID
                </TableHead>
                <TableHead class="w-[100px] md:wmax">Type</TableHead>
                <TableHead>
                    Status
                </TableHead>
                <TableHead class="!w-[200px] md:wmax">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow class="!py5 dark:border-stone-900" v-for="invoice in invoices" :key="invoice.id">
                <TableCell class="font-medium text-sm">
                    {{ invoice.id }}
                </TableCell>
                <TableCell>{{ invoice.paymentType }}</TableCell>
                <TableCell>


                    <Icon name="solar:check-square-bold" size="28" class="text-green-500"
                        v-if="invoice.paymentStatus === 'pending'" />
                    <Icon name="solar:refresh-bold" size="24" v-if="invoice.paymentStatus === 'success'" />
                    <Icon name="solar:close-circle-bold" size="28" class="text-red-500"
                        v-if="invoice.paymentStatus === 'failed'" />

                </TableCell>
                <TableCell><small class="font-medium">NGN</small> {{ invoice.totalAmount }}</TableCell>
            </TableRow>
        </TableBody>
    </Table> -->
    <div class="grid gap-3">
        <div class="p-3 bg-stone-50 rounded-2xl  flex items-center justify-between" v-for="item in invoices"
            :key="item.id">
            <div class="flex gap-3 items-center">
                <div
                    class="p-1 size-10 grid place-items-center rounded-full bg-purple-500 text-purple-500 bg-opacity-10">
                    <Icon :name="item.icon" size="24" />
                </div>
                <div>
                    <h2 class="font-medium text-base"> {{ item.paymentType }}</h2>
                    <span class="text-sm opacity-60 lowercase">{{ item.id }}</span>
                </div>
            </div>
            <div class="">
                <p class="text-base flex font-normal  items-center gap-x-0.5">
                    <Naira size="sm" /> {{ item.totalAmount }}
                </p>
                <p class="text-sm opacity-60">{{ item.paymentStatus }}</p>
            </div>
        </div>
    </div>

</template>