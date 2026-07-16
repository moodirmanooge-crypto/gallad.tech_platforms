import { useState } from "react";

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Normally between 5 and 15 working days depending on the project.",
  },
  {
    question: "Do you build mobile applications?",
    answer: "Yes. We build Android and iOS applications using Flutter.",
  },
  {
    question: "Do you offer support after delivery?",
    answer: "Yes. We provide free support for the agreed period after launch.",
  },
  {
    question: "Can you build AI Systems?",
    answer: "Yes. AI Chatbots, AI Automation, AI Videos and custom AI solutions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      style={{
        background: "#0F172A",
        padding: "90px 60px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "42px",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ maxWidth: "900px", margin: "auto" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              background: "#16213E",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              style={{
                width: "100%",
                padding: "22px",
                background: "transparent",
                color: "#fff",
                border: "none",
                textAlign: "left",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {faq.question}
            </button>

            {open === index && (
              <div
                style={{
                  padding: "20px",
                  color: "#ddd",
                  borderTop: "1px solid #334155",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}