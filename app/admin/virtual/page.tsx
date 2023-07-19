"use client";
import React from "react";

import axios, { AxiosResponse } from "axios";
import VirtualAccountForm from "./VirtualAccountForm";
import { ToastContainer } from "react-toastify";

interface CreateVirtualAccountRequest {
  publicKey: string | undefined;
  fullName: string;
  bankVerificationNumber: string;
  currency: string;
  country: string;
  reference: string;
  email: string;
}

interface CreateVirtualAccountResponse {
  status: string;
  data: {
    code: string;
    payments: {
      reference: string;
      walletName: string;
      bankName: string;
      accountNumber: string;
    };
    message: string;
  };
}

const VirtualAccount = () => {
  async function createVirtualAccount(
    fullName: string,
    reference: string,
    email: string,
    currency: string,
    country: string,
    bankVerificationNumber: string
  ): Promise<CreateVirtualAccountResponse> {
    try {
      const apiUrl = "https://seerbitapi.com/api/v2/virtual-accounts/";
      const requestData: CreateVirtualAccountRequest = {
        publicKey: process.env.NEXT_PUBLIC_SEERBIT_API,
        fullName,
        bankVerificationNumber,
        currency,
        country,
        reference,
        email,
      };

      const response: AxiosResponse<CreateVirtualAccountResponse> =
        await axios.post(apiUrl, requestData);
      return response.data;
    } catch (error: any) {
      // console.error("Error creating virtual account:", error.response.data);
      throw new Error("Failed to create virtual account");
    }
  }
  return (
    <div className="p-2 sm:p-4">
      <ToastContainer />
      <VirtualAccountForm onSubmit={createVirtualAccount} />
    </div>
  );
};

export default VirtualAccount;
