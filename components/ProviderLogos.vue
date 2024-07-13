<script setup lang="ts">
import MTN from '~/assets/images/logos/mtn.svg'
import Airtel from '~/assets/images/logos/airtel.svg'
import Glo from '~/assets/images/logos/glo.svg'
import Swift from '~/assets/images/logos/swift.jpeg'
import Smile from '~/assets/images/logos/smile.jpeg'
import Mobile from '~/assets/images/logos/9mobile.svg'
import IPNX from '~/assets/images/logos/ipnx.png'
import DSTV from '~/assets/images/logos/dstv.svg'
import GOTV from '~/assets/images/logos/gotv.svg'
import Spectranet from '~/assets/images/logos/spectranet.svg'
import Startimes from '~/assets/images/logos/startimes.svg'
import type { Providers } from '~/types'
export interface Props {
    logo?: Providers

}

const { logo } = defineProps<Props>()
</script>
<template>
    <Icon name="solar:bolt-bold" v-if="logo === 'electricity'" class="hidden md:block" size="70" />
    <Icon name="solar:bolt-bold" v-if="logo === 'electricity'" size="40" class="md:hidden" />
    <Icon name="mingcute:ship-fill" v-if="logo === 'shipping-fee'" class="hidden md:block" size="70" />
    <Icon name="mingcute:ship-fill" v-if="logo === 'shipping-fee'" size="40" class="md:hidden" />
    <Icon name="solar:bill-check-bold" v-if="logo === 'tax'" class="hidden md:block" size="70" />
    <Icon name="solar:bill-check-bold" v-if="logo === 'tax'" size="40" class="md:hidden" />
    <Icon name="solar:card-transfer-bold" v-if="logo === 'pos'" class="hidden md:block" size="70" />
    <Icon name="solar:card-transfer-bold" v-if="logo === 'pos'" size="40" class="md:hidden" />
    <img :src="Swift" alt="Swift Logo" v-if="logo === 'swift'">
    <img :src="Smile" alt="Smile Logo" v-if="logo === 'smile'">
    <img :src="MTN" alt="MTN Logo" v-if="logo === 'mtn'">
    <img :src="Airtel" alt="Airtel Logo" v-if="logo === 'airtel'">
    <img :src="Glo" alt="Glo Logo" v-if="logo === 'glo'">
    <img :src="Mobile" alt="9Mobile Logo" v-if="logo === '9mobile'">
    <img :src="IPNX" alt="IPnx Logo" v-if="logo === 'ipnx'">
    <img :src="DSTV" alt="DSTV Logo" v-if="logo === 'dstv'">
    <img :src="GOTV" alt="GOTV Logo" v-if="logo === 'gotv'">
    <img :src="Spectranet" alt="Spectranet Logo" v-if="logo === 'spectranet'">
    <img :src="Startimes" alt="Startimes Logo" v-if="logo === 'startimes'">

</template>