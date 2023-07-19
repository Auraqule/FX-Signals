"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../styles.css";
import StandardCheckout from "../checkout/page";

const PaymentModal = () => {
  const [isPayment, setIsPayment] = useState(false);
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">View</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Fx Signals</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            You can choose to subscribe (#50,000) to have access to all our
            monthly signals and join the winning team 💰.
          </Dialog.Description>
          <p>This signal is a paid signal</p>
          <p>cost: #7,700</p>
          {!isPayment && (
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => setIsPayment(true)}
                className="Button green"
              >
                Checkout
              </button>
              <button className="Button bg-purple-500 hover:bg-purple-300">
                Subscribe
              </button>
            </div>
          )}
          {isPayment && (
            <div className="mt-2">
              <StandardCheckout
                publicKey={process.env.NEXT_PUBLIC_SEERBIT_API}
                amount="7700.00"
                currency="NGN"
                country="NG"
                paymentReference={`REF-${timestamp}`}
                productId="FX"
                productDescription="Fx signal"
                callbackUrl="http://localhost:3000/"
              />
            </div>
          )}
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button bg-red-200 hover:bg-red-400">
                Close
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PaymentModal;
