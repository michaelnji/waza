    <script setup lang="ts">
    import { ref } from "vue";
    import { useRoute } from 'vue-router';
    import Logo from "./Logo.vue";

    const route = useRoute();

    const items = ref([
        {
            label: 'Home',
            icon: 'solar:home-2-linear',
            iconActive: 'solar:home-2-bold',
            route: '/'
        },
        {
            label: 'Subscription',
            icon: 'solar:hashtag-square-linear',
            route: '/subs'
        },
        {
            label: 'Bills',
            icon: 'solar:notes-linear',
            route: '/bills'
        },
        {
            label: 'Airtime',
            icon: 'solar:translation-2-bold',
            route: '/airtime'
        },

    ]);
</script>
    <template>
        <div
            class="!h-full mya w-max p-3 bg-stone-100 dark:bg-stone-900 w-full rounded-2xl  text-body flex-col  justify-between hidden md:flex fixed left-0 ">
            <div>
                <Logo />
                <div class="mt-12 mxa  wmax">
                    <div class=" grid gap-y-3">
                        <NuxtLink v-for="item in items" :to="item.route">
                            <div class="p2 rounded-xl justify-center hover:bg-stone-200 transition ease-in flex items-center "
                                :class="{ '!bg-indigo-300': route.path === item.route }" v-tooltip.right="{
                                    value: item.label,
                                    showDelay: 700
                                }">
                                <Icon :name="item.icon" size="32" />


                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="1mta">
                <NuxtLink to="/settings">
                    <div class="p2 flex items-center justify-center rounded-xl hover:bg-stone-200 transition ease-in "
                        :class="{ '!bg-indigo-300': route.path === '/settings' }" v-tooltip.right="{
                            value: 'Settings',
                            showDelay: 700
                        }">
                        <Icon name="solar:settings-minimalistic-linear" size="32" />

                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class=" fixed bottom-0 z-1 right-0 left-0 md:!hidden flex justify-center">
            <div
                class="  max-w-sm w-full p-3  dark:bg-stone-900 w-full rounded-2xl !bg-white   font-body flex justify-between">



                <NuxtLink v-for="item in items" :to="item.route">
                    <div class="p2 rounded-xl justify-center hover:bg-stone-200 transition ease-in flex items-center "
                        :class="{ '!bg-indigo-300': route.path === item.route }" v-tooltip.right="{
                            value: item.label,
                            showDelay: 700
                        }">
                        <Icon :name="item.icon" size="32" />


                    </div>
                </NuxtLink>
                <NuxtLink to="/settings">
                    <div class="p2 flex items-center justify-center rounded-xl hover:bg-stone-200 transition ease-in "
                        :class="{ '!bg-indigo-300': route.path === '/settings' }" v-tooltip.right="{
                            value: 'Settings',
                            showDelay: 700
                        }">
                        <Icon name="solar:settings-minimalistic-linear" size="32" />

                    </div>
                </NuxtLink>




            </div>
        </div>
    </template>


