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
    },
    {
        id: 'INV002',
        paymentStatus: 'pending',
        totalAmount: '150.00',
        paymentType: 'Data',
    },
    {
        id: 'INV003',
        paymentStatus: 'failed',
        totalAmount: '350.00',
        paymentType: 'Data',
    },
    {
        id: 'INV004',
        paymentStatus: 'success',
        totalAmount: '450.00',
        paymentType: 'Airtime',
    },

    {
        id: 'INV006',
        paymentStatus: 'pending',
        totalAmount: '2450.00',
        paymentType: 'Cable TV',
    },
    {
        id: 'INV007',
        paymentStatus: 'failed',
        totalAmount: '300.00',
        paymentType: 'Data',
    },
]
</script>

<template>

    <Table class="md:text-lg">
        <TableCaption>A list of your recent payments <NuxtLink to="/transactions" class="underline">see more
            </NuxtLink>
        </TableCaption>
        <TableHeader>
            <TableRow>
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
            <TableRow class="!py5" v-for="invoice in invoices" :key="invoice.id">
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
    </Table>

</template>