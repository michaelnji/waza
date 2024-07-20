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

        const { email, password, username } = body
        const { error } = await client.auth.signUp({
            email,
            password,
            options: {
                data: { display_name: username }
            }
        })
        if (error) {
            setResponseStatus(event, 200)
            return sendServerResponse(400, error.message)
        }
        setResponseStatus(event, 200)
        return sendServerResponse(200, 'Account created sueccessfully', {})
    } catch (error) {
        setResponseStatus(event, 200)
        return sendServerResponse(500, `${error}`)
    }
})
