<script setup lang="ts">
import MTN from '~/assets/images/logos/mtn.svg'
import Airtel from '~/assets/images/logos/airtel.svg'
import Glo from '~/assets/images/logos/glo.svg'
import Mobile from '~/assets/images/logos/9mobile.svg'
let chosenProvider = ref('none')
const emit = defineEmits<{
    (e: 'choose-provider', provider: "mtn" | "glo" | "airtel" | "9mobile" | "none"): void
}>()
function chooseProvider(provider: "mtn" | "glo" | "airtel" | "9mobile" | "none"
) {
    if (chosenProvider.value === provider) {
        chosenProvider.value = 'none'
        emit("choose-provider", 'none')
        return
    }
    chosenProvider.value = provider
    emit("choose-provider", provider)

}
</script>
<template>
    <div class="grid grid-cols-4 gap-3 ">
        <div class="p-3 shadow-xl relative cursor-pointer bg-purple-50 rounded-xl" @click="chooseProvider('mtn')">
            <img :src="MTN" alt="MTN Logo" class="w-full rounded-xl">
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'mtn',
                    'op-100': chosenProvider === 'mtn'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-amber-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-amber-500 z-10 hidden md:block" />
            </div>
        </div>
        <div class="p-3 shadow-xl relative cursor-pointer bg-purple-50 rounded-xl" @click="chooseProvider('airtel')">
            <img :src="Airtel" alt="Airtel Logo" class="w-full ">
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'airtel',
                    'op-100': chosenProvider === 'airtel'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-red-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-red-500 z-10 hidden md:block" />
            </div>
        </div>
        <div class="p-3 shadow-xl relative cursor-pointer bg-purple-50 rounded-xl" @click="chooseProvider('glo')">
            <img :src="Glo" alt="GLO Logo" class="w-full ">
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'glo',
                    'op-100': chosenProvider === 'glo'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-green z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-green z-10 hidden md:block" />
            </div>
        </div>
        <div class="p-3 shadow-xl relative cursor-pointer bg-purple-50 rounded-xl" @click="chooseProvider('9mobile')">
            <img :src="Mobile" alt="9Mobile Logo" class="w-full ">
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== '9mobile',
                    'op-100': chosenProvider === '9mobile'
                }">

                <Icon name="mingcute:check-2-fill" size="50" class="  text-green-400 z-10 hidden md:block" />
                <Icon name="mingcute:check-2-fill" size="30" class="  text-green-400 z-10 md:hidden" />
            </div>
        </div>
    </div>
</template>