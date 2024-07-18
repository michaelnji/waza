import * as z from 'zod'

export const registrationSchema = {
    username: z.string().min(5, { message: "Must be 5 or more characters long" }).max(50, { message: "Cannot be greater than 50 characters" }),
    password: z.string().refine((x) => passwordRegexp.test(x), { message: "Password is invalid, include at least 8 characters with at least a symbol, a letter and a number, no spaces" }),
    email: z.string().email("Email is invalid"),
}
export const loginSchema = {
    email: z.string().email("Invalid email"),
    password: z.string().min(8, { message: "Must be 8 or more characters long" })
}

