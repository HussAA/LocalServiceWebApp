"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "What is the difference between App Router and Page Router?",
    answer:
      "The Page Router uses the /pages directory for routes, while the App Router introduced in Next.js 13, uses the /app directory for more flexible, component-based routing.",
  },
  {
    question: "How do I deploy a Next.js app?",
    answer: "You can deploy a Next.js app using Vercel.",
  },
  {
    question:
      "What is the difference between Server Components and Client Components?",
    answer:
      "Server Components are rendered on the server, allowing for better performance and reduced client-side JavaScript, while Client Components are rendered on the client, enabling interactivity and state management.",
  },
];

const FAQPage = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const expandAll = () => setExpanded("all");
  const collapseAll = () => setExpanded(null);

  return (
    <div className="mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 p-8 bg-white shadow-lg rounded-lg">
      <div className="pb-10 pt-5 text-center">
        <div className="text-lg sm:text-xl font-semibold text-gray-800">
          Title: HireUp - Web Developer Position
        </div>
        <div className="text-gray-600 mt-1">Developer: Hussain Alnakhli</div>
        <Link href="mailto:Mah.Hussaina@Gmail.com">
          <div className="text-gray-600 mt-1">
            Email:{" "}
            <span className="text-blue-600 hover:underline">
              Mah.Hussaina@Gmail.com
            </span>
          </div>
        </Link>
      </div>

      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
        Frequently Asked Questions
      </div>
      <input
        type="text"
        placeholder="What's your question?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 sm:p-4 mb-10 sm:mb-6 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-end mb-4">
        <button
          onClick={expandAll}
          className="text-sm sm:text-base text-blue-600 hover:underline mr-2"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="text-sm sm:text-base text-blue-600 hover:underline"
        >
          Collapse All
        </button>
      </div>
      <div>
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="mb-3 border border-gray-300 rounded-lg p-4"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-lg font-medium text-gray-800"
            >
              {faq.question}
            </button>
            {(expanded === index || expanded === "all") && (
              <p className="mt-5 text-gray-700 text-base">{faq.answer}</p>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-gray-600 text-center">Not found.</p>
        )}
      </div>
    </div>
  );
};

export default FAQPage;
