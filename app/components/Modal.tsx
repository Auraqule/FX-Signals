import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../styles.css";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">View</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Fx Signals</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Just copy this trade informations. Follow the exact specification and
          join the winning team 😀.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="tradetype">
            Type
          </label>
          <input disabled className="Input" id="tradetype" defaultValue="BUY" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="pair">
            Cx Pair
          </label>
          <input disabled className="Input" id="pair" defaultValue="GBP/USD" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="tp">
            T-Profit
          </label>
          <input disabled className="Input" id="tp" defaultValue="1.3400" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="stopLoss">
            S-Loss
          </label>
          <input
            disabled
            className="Input"
            id="stopLoss"
            defaultValue="1.3000"
          />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="date">
            Date
          </label>
          <input
            disabled
            className="Input"
            id="date"
            defaultValue="15/07/2023"
          />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button className="Button green">Close</button>
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

export default DialogDemo;
