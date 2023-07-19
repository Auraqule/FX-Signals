import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 md:flex md:justify-between md:items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">Fx Signals</h1>
      </Link>
      <nav className="mt-4 md:mt-0">
        <ul className="md:flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/admin" className="hover:text-gray-300">
              Admin
            </a>
          </li>
          <li>
            <a href="/account" className="hover:text-gray-300">
              Account
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
