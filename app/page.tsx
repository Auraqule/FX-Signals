import Image from "next/image";
import CardList from "./components/CardList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cards = [
  {
    id: "1",
    title: "Signal 1",
    description: "This signal has a Profit potential of $53,000",
    cost: "FREE",
    imageUrl:
      "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "2",
    title: "Signal 2",
    cost: "$10",

    description: "This signal has a Profit potential of $203,000",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "3",
    title: "Signal 3",
    cost: "FREE",

    description: "This signal has a Profit potential of $2,000",
    imageUrl:
      "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: "4",
    title: "Signal 4",
    description: "This signal has a Profit potential of $153,000",
    cost: "$10",
    imageUrl:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "5",
    title: "Signal 5",
    cost: "FREE",

    description: "This signal has a Profit potential of $23,000",
    imageUrl:
      "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9yZXglMjB0cmFkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "6",
    title: "Signal 6",
    cost: "$10",

    description: "This signal has a Profit potential of $12,000",
    imageUrl:
      "https://images.unsplash.com/photo-1606189933777-a56d876d692d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvcmV4JTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "7",
    title: "Signal 7",
    description: "This signal has a Profit potential of $253,000",
    cost: "$10",
    imageUrl:
      "https://images.unsplash.com/photo-1629449710820-529bb0d3b260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvcmV4JTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "8",
    title: "Signal 8",
    cost: "FREE",

    description: "This signal has a Profit potential of $23,000",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "9",
    title: "Signal 9",
    cost: "$10",

    description: "This signal has a Profit potential of $222,000",
    imageUrl:
      "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "10",
    title: "Signal 10",
    description: "This signal has a Profit potential of $53,000",
    cost: "FREE",
    imageUrl:
      "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "12",
    title: "Signal 12",
    cost: "$10",

    description: "This signal has a Profit potential of $203,000",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "13",
    title: "Signal 13",
    cost: "FREE",

    description: "This signal has a Profit potential of $2,000",
    imageUrl:
      "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: "14",
    title: "Signal 14",
    description: "This signal has a Profit potential of $153,000",
    cost: "$10",
    imageUrl:
      "https://images.unsplash.com/photo-1622020447661-359c502f0318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZvcmV4JTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "15",
    title: "Signal 15",
    cost: "FREE",

    description: "This signal has a Profit potential of $23,000",
    imageUrl:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvcmV4JTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "16",
    title: "Signal 16",
    cost: "$10",

    description: "This signal has a Profit potential of $12,000",
    imageUrl:
      "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmV4JTIwdHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "17",
    title: "Signal 17",
    description: "This signal has a Profit potential of $53,000",
    cost: "$10",
    imageUrl:
      "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "18",
    title: "Signal 18",
    cost: "FREE",

    description: "This signal has a Profit potential of $23,000",
    imageUrl:
      "https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXglMjB0cmFkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "19",
    title: "Signal 19",
    cost: "$10",

    description: "This signal has a Profit potential of $222,000",
    imageUrl:
      "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvcmV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="w-[95%] mx-auto">
        <ToastContainer />
        <p className="py-3 text-purple-500 animate-pulse">
          Kindly Note that $1 = #770
        </p>
        <CardList cards={cards} />
      </div>
    </main>
  );
}
