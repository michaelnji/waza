import * as z from 'zod'


export const registrationSchema = z.object({
    password: z.string(),
    password2: z.string(),
    username: z.string().min(5, { message: "Must be 5 or more characters long" }).max(50, { message: "Cannot be greater than 50 characters" }),
    email: z.string().email("Email is invalid")
}).refine((x) => passwordRegexp.test(x.password), { message: "Password is invalid, include at least 8 characters with at least a symbol, a letter and a number, no spaces", path: ["password"] }).refine((x) => x.password === x.password2, { message: "Passwords do not match", path: ["password2"] })
export const loginSchema = {
    email: z.string().email("Invalid email"),
    password: z.string().min(8, { message: "Must be 8 or more characters long" })
}

