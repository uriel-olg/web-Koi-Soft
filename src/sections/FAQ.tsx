import { Plus } from "lucide-react";
import { faqs } from "../data/faq";

export default function FAQ() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div>
          <h2 id="faq-title">
            Antes de dar
            <br />
            el próximo paso.
          </h2>
          <p>Algunas respuestas para empezar con claridad.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={18} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
