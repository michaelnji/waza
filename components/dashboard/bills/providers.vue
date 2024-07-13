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
    <div class="grid grid-cols-3  gap-3 ">
        <button
            class="p3 shadow-xl relative overflow-hidden border-none grid place-items-center gap-y-1 bg-stone-50 text-amber-600 rounded-xl"
            @click="chooseProvider('electricity')">
            <ProviderLogos logo="electricity" />
            <span class="text-sm md:text-base text-stone-950 dark:text-stone-50 font-normal">Electricity</span>
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center gap-y-1"
                :class="{
                    'op-0': chosenProvider !== 'electricity',
                    'op-100': chosenProvider === 'electricity'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-amber-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-amber-500 z-10 hidden md:block" />
            </div>
        </button>
        <button
            class="p3 shadow-xl relative overflow-hidden border-none grid place-items-center gap-y-1 bg-stone-50 text-purple-600 rounded-xl"
            @click="chooseProvider('pos')">
            <ProviderLogos logo="pos" />
            <span class="text-sm md:text-base text-stone-950 dark:text-stone-50 font-normal">POS</span>
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center gap-y-1"
                :class="{
                    'op-0': chosenProvider !== 'pos',
                    'op-100': chosenProvider === 'pos'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-purple-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-purple-500 z-10 hidden md:block" />
            </div>
        </button>
        <button
            class=" p3 shadow-xl relative overflow-hidden border-none grid place-items-center gap-y-1 bg-stone-50 text-green-600 rounded-xl"
            @click="chooseProvider('tax')">
            <ProviderLogos logo="tax" />
            <span class="text-sm md:text-base text-stone-950 dark:text-stone-50 font-normal">Taxes</span>
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center gap-y-1"
                :class="{
                    'op-0': chosenProvider !== 'tax',
                    'op-100': chosenProvider === 'tax'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-green-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-green-500 z-10 hidden md:block" />
            </div>
        </button>
        <button class="p-3 shadow-xl relative grid place-items-center gap-y-1 bg-stone-50 rounded-xl text-red-500"
            @click="chooseProvider('shipping-fee')">
            <ProviderLogos logo="shipping-fee" />
            <span class="text-sm md:text-base text-stone-950 dark:text-stone-50 font-normal ">Shipping </span>

            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center gap-y-1"
                :class="{
                    'op-0': chosenProvider !== 'shipping-fee',
                    'op-100': chosenProvider === 'shipping-fee'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-red-500 z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-red-500 z-10 hidden md:block" />
            </div>
        </button>
        <button class="p-6 shadow-xl relative grid place-items-center gap-y-1 bg-stone-50 rounded-xl text-red-500"
            @click="chooseProvider('swift')">
            <ProviderLogos logo="swift" />
            <div class="wfull rounded-xl absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-op-80 grid transition ease-in place-items-center gap-y-1"
                :class="{
                    'op-0': chosenProvider !== 'swift',
                    'op-100': chosenProvider === 'swift'
                }">

                <Icon name="mingcute:check-2-fill" size="30" class="  text-red z-10 md:hidden" />
                <Icon name="mingcute:check-2-fill" size="50" class="  text-red z-10 hidden md:block" />
            </div>
        </button>

    </div>
</template>