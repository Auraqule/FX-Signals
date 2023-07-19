import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div className="m-10">
      <Link href="/">
        <p
          className="
         hover:text-blue-600 hover:underline"
        >
          Home
        </p>
      </Link>
      <Link href="/admin/virtual">
        <p
          className="
         hover:text-blue-600 hover:underline"
        >
          Create Virtual Account
        </p>
      </Link>
      <Link href="/admin/subscription">
        <p
          className="
         hover:text-blue-600 hover:underline"
        >
          Subscriptions
        </p>
      </Link>
      <Link href="#">
        <p
          className="
         hover:text-blue-600 hover:underline"
        >
          More
        </p>
      </Link>
    </div>
  );
};

export default Admin;
