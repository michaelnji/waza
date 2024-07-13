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
    <div class="grid grid-cols-3 gap-3 ">
        <button class=" shadow-xl relative overflow-hidden border-none cursor-pointer bg-purple-50 rounded-xl"
            @click="chooseProvider('dstv')">
            <ProviderLogos logo="dstv" />
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'dstv',
                    'op-100': chosenProvider === 'dstv'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-blue-50 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-blue-50 z-10 hidden md:block" />
            </div>
        </button>
        <button class="p-3 shadow-xl relative cursor-pointer bg-purple-50 rounded-xl" @click="chooseProvider('gotv')">
            <ProviderLogos logo="gotv" />

            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'gotv',
                    'op-100': chosenProvider === 'gotv'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-stone-50 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-stone-50 z-10 hidden md:block" />
            </div>
        </button>
        <button class="p-1 shadow-xl relative cursor-pointer bg-purple-50 rounded-xl"
            @click="chooseProvider('startimes')">
            <ProviderLogos logo="startimes" />

            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center"
                :class="{
                    'op-0': chosenProvider !== 'startimes',
                    'op-100': chosenProvider === 'startimes'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-orange z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-orange z-10 hidden md:block" />
            </div>
        </button>

    </div>
</template>