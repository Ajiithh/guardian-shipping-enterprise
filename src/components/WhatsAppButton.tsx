"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/97433706057?text=Hi%20Guardian%20Shipping%2C%20I%20would%20like%20to%20get%20a%20quote.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white shadow-2xl rounded-full px-5 py-3 border hover:scale-105 transition-all duration-300"
      aria-label="Chat with Guardian Shipping on WhatsApp"
    >
      <div className="bg-green-500 text-white p-3 rounded-full">
        <FaWhatsapp size={24} />
      </div>

      <div className="hidden sm:block">
        <p className="text-xs text-gray-500">Need Help?</p>
        <p className="font-semibold text-[#0e1946]">Chat with us</p>
      </div>
    </a>
  );
}