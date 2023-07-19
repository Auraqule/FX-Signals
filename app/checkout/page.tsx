"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface StandardCheckoutProps {
  publicKey: string | undefined;
  amount: string;
  currency: string;
  country: string;
  paymentReference: string;
  productId?: string;
  productDescription?: string;
  callbackUrl: string;
}

const StandardCheckout = ({
  publicKey,
  amount,
  currency,
  country,
  paymentReference,
  productId,
  productDescription,
  callbackUrl,
}: StandardCheckoutProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<any>("");

  const handlePayment = async () => {
    if (!email || email.length < 10 || !email.includes("@")) {
      toast.info("Kindly Enter your Email");

      return;
    }
    try {
      setIsLoading(true);

      // Generate the bearer token using the merchant private key and public key
      //   const encryptedKeyResponse = await axios.post(
      //     "https://seerbitapi.com/api/v2/encrypt/keys",
      //     {
      //       key: `${process.env.NEXT_PUBLIC_SEERBIT_API}.${process.env.NEXT_PUBLIC_SEERBIT_API}`,
      //     }
      //   );

      //   const encryptedKey =
      //     encryptedKeyResponse.data.data.EncryptedSecKey.encryptedKey;

      const bearerToken =
        "MRmkenFi61PEyKA25tp6EELLKuwTidYHExKx/Xl0ZE/3dBJJ3EPrgYQ3BFkeYv5rFsDFUqzFBbxfwmsKokavd5N6hO7nQjCWiTqavNUMbAA=";
      // Make the payment request with the bearer token
      const response = await axios.post(
        "https://seerbitapi.com/api/v2/payments",
        {
          publicKey,
          amount,
          currency,
          country,
          paymentReference,
          email,
          productId,
          productDescription,
          callbackUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );

      const redirectLink = response.data.data.payments.redirectLink;
      // Redirect the user to the generated link for payment
      window.location.href = redirectLink;
    } catch (error) {
      toast.error(`Payment request failed ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 ring-2 rounded"
        placeholder="Enter email"
      />
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default StandardCheckout;
