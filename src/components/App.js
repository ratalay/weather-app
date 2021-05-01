import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = (props) => {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails
        // eslint-disable-next-line react/destructuring-assignment
        city={location.city}
        // eslint-disable-next-line react/destructuring-assignment
        country={location.country}
      />
      <ForecastSummaries />
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
