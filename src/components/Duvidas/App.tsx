'use client'

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona o processo de criação do site?",
    answer:
      "Você preenche um formulário com as informações necessárias, escolhe um plano e recebe seu site pronto por e-mail.",
  },
  {
    question: "Posso personalizar o design do meu site?",
    answer:
      "Sim, você pode personalizar textos, imagens e cores para atender às suas necessidades.",
  },
  {
    question: "O que está incluso na hospedagem?",
    answer:
      "A hospedagem inclui suporte técnico, segurança e disponibilidade 24/7.",
  },
  {
    question: "Como faço para cancelar meu plano?",
    answer:
      "Você pode cancelar seu plano a qualquer momento entrando em contato com nosso suporte.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq py-10 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">
        Dúvidas Frequentes
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item border rounded-lg p-4 bg-white shadow-md"
          >
            <button
              className="w-full text-left text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
