
export function validateAuthData(details: any) {
    if (!details) return {
        error: 'Email & password missing',
    }
    if (!details.password) return {
        error: 'Password missing',
    }
    if (!details.email) return {
        error: 'Email missing',
    }
    return true
}