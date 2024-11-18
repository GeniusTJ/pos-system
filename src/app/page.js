import React from "react";
import Image from "next/image";
import "../app/globals.css";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src="/images/macaw.ico"
            alt="Macaw Icon"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">Macaw</h1>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-4">

{/*-----------------------------------Users------------------------------------------- */}         
        <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-[#1f2937] rounded">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
  <span>Users</span>
</div>

{/*-----------------------------------Products------------------------------------------- */}  
<div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-[#1f2937] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span>
              Products
            </span>
        </div>

{/*-----------------------------------Orders------------------------------------------- */}  

<div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-[#1f2937] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span>
              Orders
            </span>
          </div>

{/*----------------------------------- Inventory------------------------------------------- */}  

<div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-[#1f2937] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            <span>
              Inventory
            </span>
          </div>
{/*-----------------------------------  Payments ------------------------------------------- */}    

<div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 hover:text-[#1f2937] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
              />
            </svg>
            <span>
              Payments
            </span>
          </div>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Dashboard Content */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dashboard Content</h2>
          <p>Here’s where your main content will go.</p>
          {/* Additional components or content */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
