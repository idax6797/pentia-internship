import "../contact-form-modal/contact-form-modal.scss";
import PropTypes from "prop-types";

export default function ContactFormModal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Data has been submitted successfully!</p>
        <button onClick={props.handleCloseModal}>Close</button>
      </div>
    </div>
  );
}

ContactFormModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
