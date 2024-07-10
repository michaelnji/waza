import { format, parseISO } from "date-fns";
import { isString } from "mathjs";

export function getReadableDate(date: Date | string) {
    const formatConfig = " do MMM yyyy";
    return isString(date)
        ? format(parseISO(date), formatConfig)
        : format(date, formatConfig);
}
export function getReadableDateShort(date: Date | string) {
    const formatConfig = " dd/LL";
    return isString(date)
        ? format(parseISO(date), formatConfig)
        : format(date, formatConfig);
}

export function getDayFromDate(date: Date | string) {
    const formatConfig = "eeee LLL do";
    return isString(date)
        ? format(parseISO(date), formatConfig)
        : format(date, formatConfig);
}
