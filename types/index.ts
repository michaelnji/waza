// import * as type from 'flutterwave-node-v3-withtypes/utils/types.ts'
export type Providers = "electricity" | "mtn" | "shipping-fee" | "glo" | "airtel" | "9mobile" | "swift" | "tax" | "pos" | "smile" | "ipnx" | "dstv" | "gotv" | "spectranet" | "startimes" | "none"
export type StatusCode = 200 | 400 | 404 | 403 | 500
export type ErrorCodes = (400 | 404 | 403 | 500 | 401)
export type ServerData = {}
export interface ServerResponse<Status extends StatusCode, Data extends ServerData> {
    status: Status
    message?: string
    ok: Status extends 200 ? true : false
    data?: Status extends 200 ? Data : null
    error?: Status extends 200 ? null : string
}