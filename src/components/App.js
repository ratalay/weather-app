import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

const App = (props) => {
  return (
    <div className="App">
      <LocationDetails
        // eslint-disable-next-line react/destructuring-assignment
        city={props.location.city}
        // eslint-disable-next-line react/destructuring-assignment
        country={props.location.country}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
