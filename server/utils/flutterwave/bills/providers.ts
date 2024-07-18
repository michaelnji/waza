
import { BillingCategoryResponse } from "~/server/types/flutterwave-types/bills/types";

export const getBillsCategories = async () => {

    try {

        const response: BillingCategoryResponse = await flutterwaveClient.Bills.fetch_bills_Cat()
        const data = response.data.filter((x, i) => x.country === 'NG' && !x.biller_name.includes('ELECTRIC') && !x.name.includes('DATA') && i < 51)
        return data;
    } catch (error) {
        console.log(error)
    }

}


