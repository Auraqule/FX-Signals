"use client";
import Image from "next/image";
import React from "react";
import DialogDemo from "./Modal";
import PaymentModal from "./PaymentModal";

interface CardData {
  id: string;
  title: string;
  cost: string;
  description: string;
  imageUrl: string;
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div key={card.id} className="bg-white shadow-lg rounded-lg p-6">
          <Image
            src={card.imageUrl}
            alt={card.title}
            width={500}
            height={500}
            className="h-40 w-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-600">{card.description}</p>
          <div className="mt-2 flex items-center justify-between">
            {card.cost === "FREE" ? <DialogDemo /> : <PaymentModal />}
            <p className="text-gray-400">{card.cost}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
