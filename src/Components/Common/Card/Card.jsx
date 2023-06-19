import "./Card.scss";
// import PropTypes from "prop-types";

function App() {
  return (
    <div className="card">
      <img className="snippet" src="src/assets/snippet.svg" />
      <div className="three-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

// App.propTypes = {
//   path: PropTypes.string.isRequired,
// };

export default App;
