import React, { useState } from 'react';

const FAQData = [
  {
    id: 1,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide..."
  },
  {
    id: 2,
    question: "Can I change my order?",
    answer: "You can change your order within 24 hours of purchase..."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-left">{question}</span>
        
        {/* Toggle Icons */}
        <div className="text-gray-400">
          {isOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
            </svg>
          )}
        </div>
      </button>

      {/* Animated Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-4 text-gray-300 border-t border-gray-700">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          {FAQData.map((item) => (
            <FAQItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}