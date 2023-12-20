/* eslint-disable react/prop-types */

import { useState } from "react";
import { LuMinusCircle } from "react-icons/lu";
import { LuPlusCircle } from "react-icons/lu";
import "./Faq.css";

export default function Questions({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="questions"
 
    >
      <div className="question-title">
        <h4>{question.title}</h4>
        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <LuMinusCircle size={24} color="dodgerblue" />
          ) : (
            <LuPlusCircle size={24} color="orangered" />
          )}
        </span>
      </div>

      <div className="question-answer">
        {isOpen && <p>{question.answer}</p>}
      </div>
    </div>
  );
}
