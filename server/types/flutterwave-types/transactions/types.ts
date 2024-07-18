import type { ChargeCardType, ChargeNGBankType } from '../charge/types';
import type { Currencies, FLWResponse } from '../types';

export type TransactionEventType = {
  note: string;
  actor: string;
  object:
  | 'modal'
  | 'CREDIT_CARD'
  | 'MODAL'
  | 'IP'
  | 'Card Number'
  | 'Expiry'
  | 'CVV'
  | 'CREDIT_CARD'
  | 'payment details:credit_card'
  | 'LONG_REQUEST'
  | 'CARD_CHARGE'
  | 'TRANSACTION';
  action:
  | 'loaded'
  | 'switched'
  | 'click'
  | 'request'
  | 'typing'
  | 'charge'
  | 'submitted'
  | 'validate'
  | 'completion';
  context: 'web' | string;
  created_at: '2019-12-13T22:09:57.997Z';
};

export type TransactionFeePayload = {
  /**
   * This is the amount of the product or service to be charged from the customer.
   */
  amount: number;
  /**
   * This is the specified currency to charge in.
   */
  currency: Currencies;
  /**
   * This is an optional parameter to be used when getting the transaction fees for different payment types.
   * Expected values are card, debit_ng_account, mobilemoney, bank_transfer, and ach_payment.
   * Kindly note that different fees are applied to the different methods, You can check our fee document for more details.
   */
  payment_type?:
  | 'card'
  | 'debit_ng_account'
  | 'mobilemoney'
  | 'bank_transfer'
  | 'ach_payment';
  /**
   * This can be used only when the user has entered first 6digits of their card number,
   * it also helps determine international fees on the transaction if the card being used is an international card.
   */
  card_first6digits?: number;
};

export type ResendTransactionPayload = {
  /**
   * This is a unique transaction identifier generated by our systems. It is returned in the initiate charge response as data.id
   */
  id: string;
  /**
   * This parameter would hold for the hook response and return what you respond with as the response. The expected value is 1.
   */
  wait?: number;
};

export type TransactionsPayload = {
  /**
   * This is the specific date you would like to start the query from. The expected date format for this parameter is YYYY-MM-DD.
   */
  from?: string;

  /**
   * The is the specific end period for the search. Like from, It also has an expected date format of YYYY-MM-DD.
   */
  to?: string;

  /**
   * This is the page number to retrieve i.e. setting 1 retrieves the first page
   */
  page?: string;
  /**
   * This is the email of the customer who carried out a transaction. You can use this to query the transactions for a single customer
   */
  customer_email?: string;

  /**
   * This is the status for the queried transactions. Expected values for status include successful and failed.
   */
  status?: 'successful' | 'failed';

  /**
   * This is the unique merchant reference tied to a transaction. This should be specified when querying a specific transaction.
   */

  tx_ref?: string;
  /**
   * This is the combination of the customer first and last name passed to Flutterwave during transaction.
   * It can also be used like customer_email to query transactions made by a user.
   */
  customer_fullname?: string;

  /**
   * This is the specified currency to charge in. All currencies supported by Flutterwave can be passed here. You can check our Currency listing for more details.
   */
  currency?: Currencies;
};

export type TransactionType = {
  id: string;
  tx_ref: string;
  flw_ref: string;
  device_fingerprint: string;
  amount: number;
  currency: Currencies;
  charged_amount: number;
  app_fee?: number;
  merchant_fee: number;
  processor_response?: number;
  auth_model: 'AUTH' | string;
  ip: string;
  narration: string;
  status: 'pending' | 'successful' | 'failed';
  payment_type: 'account' | string;
  created_at: string;
  'amount_settled?': number;
  account: {
    nuban: string;
    bank: string;
  };
  customer_name: string;
  customer_email: string;
  account_id: string;
};

export interface TransactionEventResponse extends FLWResponse {
  data: TransactionEventType[];
}

export interface TransactionFeeResponse extends FLWResponse {
  data: {
    charge_amount: number;
    fee: number;
    merchant_fee: number;
    flutterwave_fee: number;
    stamp_duty_fee: number;
    currency: Currencies;
  };
}

export interface TransactionRefundResponse extends FLWResponse {
  data: {
    id: number;
    amount_refunded: number;
    status: string;
    flw_ref: string;
    comment?: string;
    settlement_id: string;
    meta: string;
    account_id: number;
    transaction_id: number;
  };
}

export interface ResendTransactionResponse extends FLWResponse {
  message: 'hook sent successfully';
  data: null;
}

export interface TransactionsResponse extends FLWResponse {
  data: TransactionType[];
}

export interface VerifyTransactionResponse extends FLWResponse {
  data: VerifyTransactionType
}

interface VerifyTransactionType extends ChargeCardType, ChargeNGBankType {

}