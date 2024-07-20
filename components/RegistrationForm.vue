<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { Input } from '~/components/ui/input'
import { registrationSchema } from '~/utils/form/schema'
const isLoading = ref(false)
const errorMessage = ref<null | string>(null)
const router = useRouter()
const formSchema = toTypedSchema(registrationSchema)
const { handleSubmit } = useForm({
    validationSchema: formSchema,
})
const onSubmit = handleSubmit(async (values) => {
    try {
        isLoading.value = true
        errorMessage.value = null
        const { password, email, username } = values
        const response = await $fetch("/api/auth/register", { method: "POST", body: { password, email, username }, headers: useRequestHeaders(['cookie']) })
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
        <FormField v-slot="{ componentField }" name="username">
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input type="text" autocomplete placeholder="Jon Doe" v-bind="componentField"
                        class="px6 py6 rounded-full" />
                </FormControl>
                <FormDescription>This will your public display name</FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="text" autocomplete placeholder="user@email.co" v-bind="componentField"
                        class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="text" autocomplete placeholder="Password" v-bind="componentField"
                        class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password2">
            <FormItem>
                <FormLabel>Repeat Password</FormLabel>
                <FormControl>
                    <Input type="text" autocomplete placeholder="Repeat Password" v-bind="componentField"
                        class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>
        <div class="space-y-2">
            <Button type="submit"
                class="px6 py6 !wfull shadow-none rounded-full text-stone-950 font-medium text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-500 font-display active:scale-95 transition ease-in flex items-center gap-x-2"
                :disabled="isLoading">
                <span> Create Account</span>
                <Icon name="svg-spinners:180-ring-with-bg" mode="css" v-if="isLoading" />

            </Button>
            <p class="opacity-75 flex items-center gap-x-1">
                Have an account? <NuxtLink to="/login"
                    class="!bg-transparent !p0 text-current shadow-none text-purple-600 flex items-center dark:text-purple-300 dark:underline-purple hover:underline underline-purple ">
                    Login

                    <Icon name="solar:arrow-right-line-duotone" class="ml-1" />
                </NuxtLink>
            </p>
        </div>
    </form>
</template>