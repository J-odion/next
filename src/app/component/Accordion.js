"use client";
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6">
      <div className="flex justify-between items-center w-full">
        <p className="flex items-center text-[#1D1F1E] font-medium   ">
          <span className="lg:mr-6 mr-4 text-[#1D1F1E]  text-[18px] leading-[24px] font-semibold">
            {question}
          </span>
        </p>
        <button
          key={index} // Correct usage of the key
          aria-label="toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineMinus className="transform" />
          ) : (
            <AiOutlinePlus className="transform" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="mt-6 w-full" id="menu">
          <p className="text-[16px] leading-[24px] text-[#1D1F1E] font-normal">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Albatross?',
      answer:
        'Albatross is a platform for event-focused trip planning, helping guests and hosts organize travel, accommodations, and activities for special occasions.',
    },
    {
      question: 'How does Albatross work for event hosts?',
      answer:
        'Hosts can create events, recommend accommodations and activities, and invite guests to manage their bookings in one place.',
    },
    {
      question: 'Can guests customize their trip?',
      answer:
        'Yes, guests can choose from tailored options and book accommodations and activities based on host recommendations.',
    },
    {
      question: 'Is there a cost to use Albatross?',
      answer:
        'While browsing is free, booking may incur costs based on selected services.',
    },
    {
      question: 'Does Albatross support group payments?',
      answer:
        'Yes, Albatross offers split-payment options for groups to manage shared costs.',
    },
    {
      question: 'What types of events can I plan on Albatross?',
      answer:
        'Albatross supports various events, including weddings, corporate retreats, and private celebrations.',
    },
    {
      question: 'How do I invite guests to my event?',
      answer:
        'After creating your event, you can send invitations directly through the platform.',
    }
  ];

  return (
    <div className="lg:container lg:mx-auto  px-4">

      <div className="flex flex-col gap-3 w-full mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="py-5 rounded-xl  shadow-lg shadow-[rgba(87, 92, 86, 0.16)] ">
            <FAQItem question={faq.question} answer={faq.answer} index={index} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
