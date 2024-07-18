import type { CountryCodes, Currencies, FLWResponse } from '../types';

export type BalanceCurrencyPayload = { currency: Currencies };

export type BalanceResponseType = {
  currency: Currencies;
  available_balance: number;
  ledger_balance: number;
};

export type BVNPayload = {
  bvn: string;
};

export type ResolveAccountPayload = {
  /**
   * This is the account number (could also be a Merchant ID or MPesa mobile number) to be resolved.
   * If you are resolving a Flutterwave account or MPesa mobile number, You should pass the merchant ID or mobile number.
   */
  account_number: string;
  /**
   * This is the code for the Bank. You can get this code using the Banks.country() method.
   */
  account_bank: string;
  /**
   * This is the payment type. This is only needed for resolving Mpesa mobile numbers.
   */
  type?: string;
  /**
   * This is the country associated with the payment type. Expected values include NG, KE and US
   */
  country?: CountryCodes;
};

export interface BalanceCurrencyResponse extends FLWResponse {
  data: BalanceResponseType;
}

export interface BalanceResponse extends FLWResponse {
  data: BalanceResponseType[];
}

export interface AccountResponse extends FLWResponse {
  data: {
    account_number: string;
    account_name: string;
  };
}

export interface BVNResponse extends FLWResponse {
  data: {
    bvn: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    date_of_birth: string;
    phone_number: string;
    registration_date: string;
    enrollment_bank: string;
    enrollment_branch: string;
    'image_base_64?': string;
    address?: string;
    gender: 'Male' | 'Female';
    email?: string;
    watch_listed?: string;
    nationality?: string;
    marital_status?: string;
    state_of_residence?: string;
    lga_of_residence?: string;
    image?: any;
  };
}


export interface ResolveAccountResponse extends FLWResponse {
  data: {
    account_number: string;
    account_name: string;
  };
}