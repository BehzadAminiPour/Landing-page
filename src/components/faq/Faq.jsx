import { MdOutlineLibraryBooks } from "react-icons/md";
import "./Faq.css";
import { questions } from "./data.js";
import Questions from "./Questions.jsx";

export default function Faq() {
  return (
    <section id="faq">
      <div className="container faq">
        <div className="faq-title">
          <MdOutlineLibraryBooks color="orangered" size={28} />
          <h2>سوالات متداول</h2>
          <hr />
        </div>

        {questions.map((question) => (
          <Questions key={question.id} question={question} />
        ))}
      </div>
    </section>
  );
}
