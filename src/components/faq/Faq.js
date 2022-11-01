import React from "react";

import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Question from "./Question";
import "./Faq.scss";

import { questions } from "./data";

const Faq = () => {
  return (
    <section className="faq-sec">
      <div className="container faq">
        <div className="title --center-all" >
          <BsFillJournalBookmarkFill size={35} color="orangered" />
          <h2 className="--mb2">FAQS</h2>
          <p className="--text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="questions" >
            {questions.map((question) => (
                <Question key={question.id} title={question.title} answer={question.answer} />
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default Faq;
