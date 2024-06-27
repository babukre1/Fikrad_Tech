"use client";
import { faqs } from "@/constants";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({ data }: { data: typeof faqs }) => {
  const [currentActive, setCurrentActive] = useState<number | null>(0);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="bg-peach-600 px-5 rounded-lg">
          <div
            className="flex items-center justify-between cursor-pointer py-5"
            onClick={() => setCurrentActive(index)}
          >
            <h6>{item.question}</h6>
            <div
              className={`transition-transform duration-300 ${
                currentActive === index ? "rotate-45" : ""
              }`}
            >
              <Plus size={16} />
            </div>
          </div>
          <div
            className={`to-grey-600 transition-all duration-300 ${
              currentActive !== index
                ? "max-h-0 opacity-0"
                : "max-h-[1000px] opacity-100 pb-5"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
