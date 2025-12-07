"use client";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please insert a valid email.");
      return;
    }

    setError("");
    console.log("Email submitted:", email);
  };

  return (
    <form className="max-w-sm">
      <div className="flex flex-row flex-nowrap gap-3">
        <input
          type="email"
          placeholder="Email Address"
          className={`border py-2 px-4 rounded-full bg-white placeholder:text-gray-500 outline-none ${
            error ? "border-red-700 text-red-700" : "text-gray-800"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="button"
          className="bg-orange-primary-400 text-white py-2 rounded-full hover:opacity-80 cursor-pointer px-4"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
      {error && <p className="text-red-700 text-sm px-3 italic">{error}</p>}

    </form>
  );
}
