<script setup lang="ts">
import type { Providers } from '~/types';

let chosenProvider = ref('none')
const emit = defineEmits<{
    (e: 'choose-provider', provider: Providers): void
}>()
function chooseProvider(provider: Providers
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
        <button class=" shadow-xl relative overflow-hidden border-none cursor-pointer bg-purple-50 rounded-xl"
            @click="chooseProvider('mtn')">
            <ProviderLogos logo="mtn" />
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'mtn',
                    'op-100': chosenProvider === 'mtn'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-amber-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-amber-500 z-10 hidden md:block" />
            </div>
        </button>
        <button class=" shadow-xl relative overflow-hidden border-none cursor-pointer bg-purple-50 rounded-xl"
            @click="chooseProvider('smile')">
            <ProviderLogos logo="smile" />
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'smile',
                    'op-100': chosenProvider === 'smile'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-green z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-green z-10 hidden md:block" />
            </div>
        </button>
        <button class=" p2 shadow-xl relative overflow-hidden border-none cursor-pointer bg-purple-50 rounded-xl"
            @click="chooseProvider('ipnx')">
            <ProviderLogos logo="ipnx" />
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'ipnx',
                    'op-100': chosenProvider === 'ipnx'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-red z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-red z-10 hidden md:block" />
            </div>
        </button>
        <button class=" p2 shadow-xl relative overflow-hidden border-none cursor-pointer bg-purple-50 rounded-xl"
            @click="chooseProvider('spectranet')">
            <ProviderLogos logo="spectranet" />
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'spectranet',
                    'op-100': chosenProvider === 'spectranet'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-red z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-red z-10 hidden md:block" />
            </div>
        </button>


    </div>
</template>