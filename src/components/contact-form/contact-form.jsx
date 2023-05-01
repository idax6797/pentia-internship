import "../contact-form/contact-form.scss";

export default function ContactForm() {
  return (
    <>
      <form>
        <div className="form-section form-section--wide">
          <label htmlFor="name">Navn</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-section">
          <label htmlFor="mobile">Mobil</label>
          <input type="tel" id="mobile" name="mobile" />
        </div>
        <div className="form-section">
          <label htmlFor="email">e-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-section">
          <label htmlFor="zipcode">Postnr.</label>
          <input type="text" id="zipcode" name="zipcode" />
        </div>
        <div className="form-section">
          <label htmlFor="city">By</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="form-section form-section--wide form-section--btn">
          <button type="submit">Ring mig op</button>
        </div>
      </form>
    </>
  );
}
