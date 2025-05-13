import React, { useState } from "react";

const faqs = [
  {
    question: "আইনি পরামর্শ নেওয়ার জন্য কি সময় পূর্বে বুকিং করতে হয়?",
    answer: "হ্যাঁ, আমাদের অফিসে সাক্ষাৎ অথবা অনলাইন কনসালটেশন পেতে হলে কমপক্ষে একদিন পূর্বে অ্যাপয়েন্টমেন্ট নিতে হবে।",
  },
  {
    question: "আপনারা কোন ধরণের মামলা পরিচালনা করেন?",
    answer: "আমরা সিভিল, ক্রিমিনাল, ফ্যামিলি, কোম্পানি, ট্যাক্স, ও কনস্টিটিউশনাল মামলাসহ বিভিন্ন আইনগত সেবা প্রদান করি।",
  },
  {
    question: "আপনারা কি কর্পোরেট ক্লায়েন্টদের সেবা দেন?",
    answer: "জী হ্যাঁ, আমরা কর্পোরেট ও ব্যবসায়িক ক্লায়েন্টদের জন্য কোম্পানি রেজিস্ট্রেশন, চুক্তি পর্যালোচনা ও কর পরামর্শ প্রদান করে থাকি।",
  },
  {
    question: "আপনারা কি অনলাইন কনসালটেশন দেন?",
    answer: "হ্যাঁ, Zoom বা Google Meet-এর মাধ্যমে আমরা অনলাইন কনসালটেশন সেবা প্রদান করি।",
  },
  {
    question: "সেবা নিতে কি নথিপত্র সঙ্গে আনতে হবে?",
    answer: "হ্যাঁ, সংশ্লিষ্ট সকল ডকুমেন্ট ও কাগজপত্র সঙ্গে আনলে সঠিক পরামর্শ দেয়া সহজ হয়।",
  },
  {
    question: "আপনাদের অফিস কোথায় অবস্থিত?",
    answer: "আমাদের অফিস: House # 130, Road # 05, Mohammadi Housing Society, Mohammadpur (Shia মসজিদের পাশে)।",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border border-orange-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-orange-700 focus:outline-none"
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
