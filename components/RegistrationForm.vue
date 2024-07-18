<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { registrationSchema } from '~/utils/form/schema'

const formSchema = toTypedSchema(z.object(registrationSchema).required())

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})
const onSubmit = handleSubmit((values) => {
    console.log(values)

})
</script>

<template>
    <form class=" space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Jon Doe" v-bind="componentField" class="px6 py6 rounded-full" />
                </FormControl>
                <FormDescription>This will your public display name</FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="user@email.co" v-bind="componentField"
                        class="px6 py6 rounded-full" />
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
                <FormDescription class="flex gap-x-1"> Forgot Password? <NuxtLink to="/"
                        class="!bg-transparent !p0 text-current shadow-none text-purple-600 hover:underline flex items-center  underline-purple ">
                        Recover account
                        <Icon name="solar:square-share-line-line-duotone" class="ml-1" />
                    </NuxtLink>
                </FormDescription>
            </FormItem>
        </FormField>
        <div class="space-y-2">
            <Button type="submit"
                class="px6 py6 wfull shadow-none rounded-full text-stone-950 font-medium text-xl dark:bg-amber-300 dark:hover:bg-amber-400 bg-amber-400 hover:bg-amber-500 font-display active:scale-95 transition ease-in">
                Create Account
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