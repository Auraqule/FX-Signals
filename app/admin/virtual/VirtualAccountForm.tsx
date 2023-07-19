"use client";
import { useState } from "react";
import { toast } from "react-toastify";

interface VirtualAccountFormData {
  publicKey: string;
  fullName: string;
  bankVerificationNumber: string;
  currency: string;
  country: string;
  reference: string;
  email: string;
}

const VirtualAccountForm = ({ onSubmit }: any) => {
  const [formData, setFormData] = useState<VirtualAccountFormData>({
    publicKey: "",
    fullName: "",
    bankVerificationNumber: "",
    currency: "",
    country: "",
    reference: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // createVirtualAccount(formData)
    // Usage example
    onSubmit(
      formData.fullName,
      formData.currency,
      formData.country,
      formData.country,
      formData.reference,
      formData.bankVerificationNumber
    )
      .then((result: any) => {
        console.log("Virtual account created successfully:", result);
        toast.success("Virtual account created successfully:", result);
      })
      .catch((error: any) => {
        console.error("Error creating virtual account:", error);
        // toast.error(`Error creating virtual account`);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 px-4">
      <input
        type="text"
        name="fullName"
        required
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="p-2 rounded border"
      />
      <input
        type="text"
        name="bankVerificationNumber"
        value={formData.bankVerificationNumber}
        onChange={handleChange}
        placeholder="Bank Verification Number"
        className="p-2 rounded border"
      />
      <input
        type="text"
        name="currency"
        required
        value={formData.currency}
        onChange={handleChange}
        placeholder="Currency e.g NGN"
        className="p-2 rounded border"
      />
      <input
        type="text"
        name="country"
        required
        value={formData.country}
        onChange={handleChange}
        placeholder="Country e.g NG"
        className="p-2 rounded border"
      />
      <input
        type="text"
        name="reference"
        required
        value={formData.reference}
        onChange={handleChange}
        placeholder="Reference"
        className="p-2 rounded border"
      />
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 rounded border"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Create Virtual Account
      </button>
    </form>
  );
};

export default VirtualAccountForm;
