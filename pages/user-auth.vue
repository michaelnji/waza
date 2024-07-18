<script setup lang="ts">

definePageMeta({
    layout: 'default'
})
const route = useRoute()
const authType = route.query.type
const router = useRouter()
if (!authType) router.push("/user-auth?type=login")

const currentAuthType = ref(authType)
</script>
<template>
    <div class="w-full h-screen">
        <div
            class="w-full p3 xl:p0 h-full bg-stone-50 md:bg-stone-100 dark:bg-stone-950 grid xl:grid-cols-2 md:place-items-center xl:place-items-initial  xl:gap-12">
            <div class="hidden xl:block">
                <div class=" bg-p max-h-full  grid place-items-center w-full hfull  border-dashed">
                    <div>
                        <Swiper :modules="[SwiperAutoplay, SwiperEffectCards]" class="max-w-md" :effect="'cards'"
                            :autoplay="{
                                delay: 4000,
                                disableOnInteraction: true,

                            }" :loop="true">
                            <SwiperSlide key="one" class="rounded-3xl">
                                <WelcomeCard>
                                    <template #illustration>
                                        <IllustrationsSetup />
                                    </template>

                                    <template #text>
                                        <p class=" opacity-90  font-medium text-4xl "> Waza allows you to
                                            buy
                                            airtime,
                                            data and to pay for your utility bills and taxes
                                        </p>
                                    </template>
                                </WelcomeCard>
                            </SwiperSlide>
                            <SwiperSlide key="two" class="rounded-3xl">
                                <WelcomeCard>
                                    <template #illustration>
                                        <IllustrationsSecurity />
                                    </template>

                                    <template #text>
                                        <p class=" opacity-90  font-medium text-4xl "> Waza uses industry
                                            grade technologies to ensure optimal & strong security
                                        </p>
                                    </template>
                                </WelcomeCard>
                            </SwiperSlide>
                            <SwiperSlide key="three" class="rounded-3xl">
                                <WelcomeCard>
                                    <template #illustration>
                                        <IllustrationsTech />
                                    </template>

                                    <template #text>
                                        <p class=" opacity-90  font-medium text-4xl "> Waza is fast,
                                            reliable
                                            and always ready to get your bills sorted out with optimal results.
                                        </p>
                                    </template>
                                </WelcomeCard>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </div>
            </div>
            <div class="w-full  grid md:place-items-center xl:bg-stone-50 dark:xl:bg-stone-900 ">
                <div
                    class=" dark:text-stone-50 rounded-2xl xl:rounded-none dark:md:border xl:border-none dark:md:bg-stone-900 xl:bg-transparent dark:md:border-stone-800 p6 md:p-8 md:bg-stone-50 xl:p0 w-full !max-w-sm md:!max-wmd  !overflow-hidden">
                    <div class="mb-6">
                        <Logo />
                    </div>
                    <div v-if="currentAuthType === 'login'">
                        <h2 class="font-display font-medium text-3xl md:text-4xl ">Welcome Back</h2>
                        <p class="md:text-lg opacity-80">Let's log you in</p>
                    </div>
                    <div v-if="currentAuthType === 'registration'">
                        <h2 class="font-display font-medium text-3xl md:text-4xl ">Create Account</h2>
                        <p class="md:text-lg opacity-80">Let's get you up to speed</p>
                    </div>
                    <div class="mt-8">

                        <LoginForm v-if="currentAuthType === 'login'" @auth-type-change="(e) => {
                            currentAuthType = e
                            router.replace('/user-auth?type=registration')
                        }" key="login-form" />

                        <RegistrationForm v-if="currentAuthType === 'registration'" key="registration-form"
                            @auth-type-change="(e) => {
                                currentAuthType = e
                                router.replace('/user-auth?type=login')
                            }" />

                    </div>




                </div>
            </div>
        </div>
    </div>
</template>
<style>
.bg-p {
    background-repeat: no-repeat;
    background-image: url('../assets/images/pattern-3.svg');
    background-size: contain;
    background-position: center;
}
</style>