"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-200 shadow-md rounded-xl p-6 sm:p-12 border border-gray-300 m-4">
      {/* Overview Section */}
      <h2 className="text-lg font-semibold mb-2">Overview</h2>
      <p className="text-gray-700 p-4 rounded-lg text-sm mb-4 bg-gray-100">
        We&lsquo;re <span className="font-semibold">Textify AI</span>, and we
        believe technology should feel like magic. Our team of AI wizards
        transforms complex artificial intelligence into intuitive, user-centric
        genies designed to solve your unique challenges. From streamlining hotel
        operations with RoomGenie to uncovering financial insights with News
      </p>

      {/* Contact & Funding Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Contact Info */}
        <div className="border p-4 rounded-lg bg-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Contact info
          </h3>
          <Link
            href="https://textify.ai/"
            className="text-blue-600 text-sm block my-2"
          >
            textify.ai
          </Link>
          <p className="text-blue-600 text-sm">+91-9343030402</p>
        </div>
        {/* Funding Info */}
        <div className="border p-4 rounded-lg bg-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Funding via Crunchbase
          </h3>
          <p className="text-gray-700 text-sm my-2">Pre-seed</p>
          <p className="text-black font-bold text-sm">US $100K</p>
        </div>
        <div className="border p-4 rounded-lg bg-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Industry</h3>
          <p className="text-gray-700 text-sm">Software Development</p>
        </div>
        <div className="border p-4 rounded-lg bg-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Company size</h3>
          <p className="text-gray-700 text-sm">11-50 employees</p>
          <p className="text-gray-500 text-xs">8 associated members ⓘ</p>
        </div>
        <div className="border p-4 rounded-lg bg-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Headquarters</h3>
          <p className="text-gray-700 text-sm">Indore, Madhya Pradesh</p>
        </div>
        <div className="border p-4 rounded-lg bg-gray-100">
          <h3 className="text-sm font-semibold text-gray-900">Founded</h3>
          <p className="text-gray-700 text-sm">2021</p>
        </div>
        <div className="border p-4 rounded-lg bg-gray-100 col-span-1 sm:col-span-2 lg:col-span-3">
          <h3 className="text-sm font-semibold text-gray-900">Specialties</h3>
          <p className="text-gray-700 text-sm">
            artificial intelligence, Natural language processing, admission
            essays, ai, nlp, NLG, GPT, text analysis, paraphrasing,
            proofreading, brainstorming, and drafting
          </p>
        </div>
      </div>
    </div>
  );
}
