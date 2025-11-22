import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "What is JavaScript?",
      description:
        "JavaScript is a lightweight, interpreted programming language used to make web pages interactive and dynamic."
    },
    {
      title: "What is React?",
      description:
        "React is a JavaScript library used to build fast and interactive user interfaces for web applications."
    },
    {
      title: "What is Node.js?",
      description:
        "Node.js is a runtime environment that lets developers run JavaScript on the server."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Accordion</h1>

      <div className="w-full max-w-xl space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-xl shadow-lg border border-gray-700"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700 rounded-xl transition-all"
            >
              <span className="text-lg font-medium">{item.title}</span>

              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
