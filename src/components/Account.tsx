import React, { useState } from "react";
import { FaUniversity, FaCreditCard } from "react-icons/fa";

export default function Account() {
  const [amount, setAmount] = useState();
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const methods = [
    { id: "bank", name: "Bank Transfer", description: "Within 24 hours", icon: <FaUniversity />, available: true },
    { id: "mastercard", name: "TransferMaster Card", description: "Not Available", icon: <FaCreditCard />, available: false },
    { id: "credit", name: "Credit / Debit Card", description: "Not Available", icon: <FaCreditCard />, available: false },
  ];

  return (
    <div className="flex flex-col p-6">
      <h1 className="text-xl font-bold self-start">Withdraw</h1>

      {/* Balance and Actions Section */}
      <div className="flex items-center mt-10 gap-6">
        <div className="bg-green-800 text-white h-44 p-6 rounded-2xl text-center flex-1">
          <p className="text-sm">Total Balance</p>
          <p className="text-3xl font-bold">57,000.00</p>
        </div>

        <div className="flex flex-col w-[300px] gap-4">
          <button className="bg-green-800 text-white py-3 h-20 rounded-2xl">Withdraw</button>
          <button className="bg-green-800 text-white py-3 h-20 rounded-2xl">Deposit</button>
        </div>
      </div>

      {/* Amount Input */}
      <div className="w-full max-w-md mt-6">
        <label className="block text-sm font-medium mb-2">Amount</label>
        <div className="flex items-center rounded-3xl overflow-hidden p-1">
          <div className="flex-1">
            <input
              type="number"
              value={amount}
              placeholder="30,000"
              // onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded-xl"
            />
          </div>
          <div className="ml-4">
            <span className="bg-white px-4 border py-3 rounded-xl">Naira</span>
          </div>
        </div>
      </div>

      {/* Withdrawal Methods */}
      <div className="w-full max-w-md mt-6">
        <h2 className="text-sm font-semibold mb-3">Withdraw Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[900px] ">
          {methods.map((method) => (
            <button
              key={method.id}
              className={`border p-4 rounded flex flex-col items-center w-full ${
                selectedMethod === method.id ? "border-green-700" : "border-gray-300"
              } ${method.available ? "hover:border-green-500" : "opacity-50 cursor-not-allowed"}`}
              onClick={() => method.available && setSelectedMethod(method.id)}
              disabled={!method.available}
            >
              <div className="text-2xl mb-2">{method.icon}</div>
              <div className="font-semibold text-sm">{method.name}</div>
              <div className="text-xs text-gray-500">{method.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <button className="bg-green-800 text-white py-3 px-10 w-48 rounded-xl mt-6">Continue</button>
    </div>
  );
}
