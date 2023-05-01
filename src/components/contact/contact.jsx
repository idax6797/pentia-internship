import ContactForm from "../contact-form/contact-form";
import "../contact/contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__heading">
        <h2>Få 10 gode råd om</h2>
        <h2>digital transformation</h2>
        <h4>Ja tak, jeg vil gerne høre mere om digital transformation</h4>
      </div>
      <div className="contact__form">
        <ContactForm />
      </div>
      <div className="contact__prize">
        <img
          src="../../../src/assets/icon/prize.svg"
          alt="Digital innovations pris"
        />
        <p>Pentia vinder pris for digital innovation 2017</p>
      </div>
    </section>
  );
}
