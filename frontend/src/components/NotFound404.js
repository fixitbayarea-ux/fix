import React from "react";
import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-[#1A3B5D]">404 – Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <div className="flex gap-4">
        <Link to="/" className="px-6 py-3 bg-[#C0362C] text-white rounded-lg font-bold hover:bg-[#a42f25] transition">Home</Link>
        <Link to="/#services" className="px-6 py-3 border-2 border-[#C0362C] text-[#C0362C] rounded-lg font-bold hover:bg-[#C0362C] hover:text-white transition">Services</Link>
      </div>
    </div>
  );
}
