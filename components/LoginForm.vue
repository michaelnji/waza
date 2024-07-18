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
import { Input } from '~/components/ui/input'
import { loginSchema } from '~/utils/form/schema'
type AuthType = "registration" | "login"

const emit = defineEmits<{
    (e: 'auth-type-change', authType: AuthType): void
}>()
const formSchema = toTypedSchema(z.object(loginSchema).required())

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})
const onSubmit = handleSubmit((values) => {
    console.log(values)

})
</script>

<template>
    <form class=" space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="email" v-bind="componentField" class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Password" v-bind="componentField" class="px6 py6 rounded-full" />
                </FormControl>

                <FormMessage />

            </FormItem>
        </FormField>
        <div class="space-y-2">
            <Button type="submit"
                class="px6 py6 wfull shadow-none rounded-full text-stone-950 font-medium text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-500 font-display active:scale-95 transition ease-in">
                Login to account
            </Button>
            <p class="opacity-75">
                Don't have an account? <Button :link="true" @click="emit('auth-type-change', 'registration')"
                    class="!bg-transparent !p0 text-current shadow-none text-purple-600 hover:underline underline-purple ">Sign
                    up
                    <Icon name="solar:arrow-right-line-duotone" class="ml-1" />
                </Button> </p>
        </div>
    </form>
</template>