import "./Card.scss";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="card">
      <img className="snippet" src={props.path} />
      <div className="three-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

App.propTypes = {
  path: PropTypes.string.isRequired,
};

export default App;
