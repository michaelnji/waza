import { serverSupabaseClient } from '#supabase/server'

import { isBoolean } from 'mathjs'
import { validateAuthData } from '~/server/utils/auth'
import { sendServerResponse } from '~/server/utils/response'

export default eventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const body = await readBody(event)
        const dataIsValidated = validateAuthData(body)
        if (!isBoolean(dataIsValidated) && dataIsValidated.error) {
            setResponseStatus(event, 200)
            return sendServerResponse(400, dataIsValidated.error)
        }

        const { email, password } = body
        const { error } = await client.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            let message = error.message
            if (message === 'Invalid login credentials') message = 'Email or password is incorrect'
            setResponseStatus(event, 200)
            return sendServerResponse(400, message)
        }
        setResponseStatus(event, 200)
        return sendServerResponse(200, 'Login successful', {})
    } catch (error) {
        setResponseStatus(event, 200)
        return sendServerResponse(500, `${error}`)
    }
})
