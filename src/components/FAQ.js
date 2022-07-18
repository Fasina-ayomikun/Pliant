import React, { useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const data = [
  {
    question: "What is Pliant",
    answer:
      "Pliant offers modern corporate credit cards. Our convenient and easy-to-use card management platform allows for flexible setting of card limits, real-time reporting and seamlessly integrates with your existing setup of accounting and travel expense management tools and processes. On top of that, Pliant offers competitive terms with attractive cashbacks and partner deals. Our Visa Infinite Business cards are equipped with useful features like tailored insurance packages and worldwide airport lounge access.",
  },
  {
    question: "What type of card are offered?",
    answer:
      "  Pliant offers Visa credit cards, both virtual and physical. Regarding physical cards, customers can choose between Blue (Visa Platinum Business) and Black (Visa Infinite Business credit cards). Pliant is neither a prepaid nor a debit card and, therefore, is bank account independent, offers maximum card acceptance, and does not need to be charged in advance.",
  },
  {
    question: "What type of card are offered?",
    answer:
      "  Pliant offers Visa credit cards, both virtual and physical. Regarding physical cards, customers can choose between Blue (Visa Platinum Business) and Black (Visa Infinite Business credit cards). Pliant is neither a prepaid nor a debit card and, therefore, is bank account independent, offers maximum card acceptance, and does not need to be charged in advance.",
  },
  {
    question: "What type of card are offered?",
    answer:
      "  Pliant offers Visa credit cards, both virtual and physical. Regarding physical cards, customers can choose between Blue (Visa Platinum Business) and Black (Visa Infinite Business credit cards). Pliant is neither a prepaid nor a debit card and, therefore, is bank account independent, offers maximum card acceptance, and does not need to be charged in advance.",
  },
  {
    question: "What type of card are offered?",
    answer:
      "  Pliant offers Visa credit cards, both virtual and physical. Regarding physical cards, customers can choose between Blue (Visa Platinum Business) and Black (Visa Infinite Business credit cards). Pliant is neither a prepaid nor a debit card and, therefore, is bank account independent, offers maximum card acceptance, and does not need to be charged in advance.",
  },
  {
    question: "What is Pliant",
    answer:
      "Pliant offers modern corporate credit cards. Our convenient and easy-to-use card management platform allows for flexible setting of card limits, real-time reporting and seamlessly integrates with your existing setup of accounting and travel expense management tools and processes. On top of that, Pliant offers competitive terms with attractive cashbacks and partner deals. Our Visa Infinite Business cards are equipped with useful features like tailored insurance packages and worldwide airport lounge access.",
  },
  {
    question: "What is Pliant",
    answer:
      "Pliant offers modern corporate credit cards. Our convenient and easy-to-use card management platform allows for flexible setting of card limits, real-time reporting and seamlessly integrates with your existing setup of accounting and travel expense management tools and processes. On top of that, Pliant offers competitive terms with attractive cashbacks and partner deals. Our Visa Infinite Business cards are equipped with useful features like tailored insurance packages and worldwide airport lounge access.",
  },
];
function FAQ() {
  const [faq, setFaq] = useState("");

  const toggle = (i) => {
    if (faq === i) {
      return setFaq(null);
    }
    setFaq(i);
  };
  return (
    <section className='faq-section' id='faq'>
      <div className='faq-container'>
        <h3>Do you have any further questions?</h3>
        {data.map((item, i) => {
          return (
            <div className={`${faq === i ? "faq show-faq" : "faq"}`} key={i}>
              <div className='faq-head'>
                <h6>{item.question} </h6>
                {faq === i ? (
                  <KeyboardArrowUpIcon onClick={() => toggle(i)} />
                ) : (
                  <KeyboardArrowDownIcon onClick={() => toggle(i)} />
                )}
              </div>
              <p>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
