<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '~/components/ui/form'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { Input } from '~/components/ui/input'
import { loginSchema } from '~/utils/form/schema'
const formSchema = toTypedSchema(z.object(loginSchema).required())
const isLoading = ref(false)
const errorMessage = ref<null | string>(null)
const router = useRouter()
const { handleSubmit } = useForm({
    validationSchema: formSchema,
})
const onSubmit = handleSubmit(async (values) => {
    try {
        isLoading.value = true
        errorMessage.value = null
        const { password, email } = values
        const response = await $fetch("/api/auth/login", { method: "POST", body: { password, email }, headers: useRequestHeaders(['cookie']) })
        isLoading.value = false
        if (response.status === 200) {
            router.push("/")
            return
        }
        errorMessage.value = response.message === 'fetch failed' ? 'You are offline' : response.message
    } catch (error) {

    }

})
</script>

<template>
    <Alert variant="destructive" v-if="errorMessage" class="mb8">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
            {{ errorMessage }}
        </AlertDescription>
    </Alert>
    <form class=" space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="user@email.co" v-bind="componentField" autocomplete
                        class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Password" autocomplete v-bind="componentField"
                        class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />
                <FormDescription class="flex gap-x-1"> Forgot Password? <NuxtLink to="/"
                        class="!bg-transparent !p0 text-current shadow-none text-purple-600 dark:text-purple-300 hover:underline flex items-center  underline-purple ">
                        Recover account
                        <Icon name="solar:square-share-line-line-duotone" class="ml-1" />
                    </NuxtLink>
                </FormDescription>
            </FormItem>
        </FormField>
        <div class="space-y-2">
            <Button type="submit"
                class="px6 py6 wfull shadow-none rounded-full text-stone-950 font-medium text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-500 font-display active:scale-95 transition ease-in flex items-center gap-x-2"
                :disabled="isLoading">
                <span> Login to account</span>
                <Icon name="svg-spinners:180-ring-with-bg" v-if="isLoading" />
            </Button>
            <p class="opacity-75 flex items-center gap1">
                Don't have an account? <NuxtLink to="/registration"
                    class="!bg-transparent !p0 text-current shadow-none text-purple-600 flex items-center dark:text-purple-300 dark:underline-purple hover:underline underline-purple ">
                    Sign
                    up
                    <Icon name="solar:arrow-right-line-duotone" class="ml-1" />
                </NuxtLink>
            </p>
        </div>
    </form>
</template>