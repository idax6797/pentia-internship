import "./information-card.scss";
import PropTypes from "prop-types";

export default function InformationCard(props) {
  return (
    <div className="information-card">
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h4>{props.headline}</h4>
      <p>{props.description}</p>
    </div>
  );
}

InformationCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
