<script setup lang="ts">
import MTN from '~/assets/images/logos/mtn.svg'
import Airtel from '~/assets/images/logos/airtel.svg'
import Glo from '~/assets/images/logos/glo.svg'
import Mobile from '~/assets/images/logos/9mobile.svg'
export interface Props {
    logo?: "electricity" | "glo" | "airtel" | "9mobile"

}

const { logo } = defineProps<Props>()
</script>
<template>
    <Icon name="solar:bolt-bold" v-if="logo === 'electricity'" />
    <img :src="Airtel" alt="Airtel Logo" v-if="logo === 'airtel'">
    <img :src="Glo" alt="Glo Logo" v-if="logo === 'glo'">
    <img :src="Mobile" alt="9Mobile Logo" v-if="logo === '9mobile'">

</template>