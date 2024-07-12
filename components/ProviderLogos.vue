<script setup lang="ts">
import MTN from '~/assets/images/logos/mtn.svg'
import Airtel from '~/assets/images/logos/airtel.svg'
import Glo from '~/assets/images/logos/glo.svg'
import Mobile from '~/assets/images/logos/9mobile.svg'
export interface Props {
    logo?: "mtn" | "glo" | "airtel" | "9mobile"

}

const { logo } = defineProps<Props>()
</script>
<template>
    <img :src="MTN" alt="MTN Logo" v-if="logo === 'mtn'">
    <img :src="Airtel" alt="Airtel Logo" v-if="logo === 'airtel'">
    <img :src="Glo" alt="Glo Logo" v-if="logo === 'glo'">
    <img :src="Mobile" alt="9Mobile Logo" v-if="logo === '9mobile'">

</template>