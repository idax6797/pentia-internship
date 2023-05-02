import "../contact-form-modal/contact-form-modal.scss";
import PropTypes from "prop-types";

export default function ContactFormModal(props) {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>Tak for din henvendelse. Vi vil kontakte dig hurtigst muligt!</p>
        <button onClick={props.handleCloseModal}>Luk</button>
      </div>
    </div>
  );
}

ContactFormModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
