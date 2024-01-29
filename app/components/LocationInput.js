import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchWeather }  from "../store/slices/weatherSlice";
import '../styles.css';

// manages state of location and errors - dispatches API call
export const LocationInput = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const locationInputError = useSelector((state) => state.weather.error);

  const LocationSubmit = (event) => {
    event.preventDefault();

    // checks if location input is empty
    if (location.trim() === '') {
      setError('Please enter a city.');
      return
    }
    setError('');

    dispatch(fetchWeather(location));
    setLocation('');
 };

 // returns input field, submit button and table header to be seen by the user
  return (
 <div className="row">
      <form>
    <br/>
    <input id="input"
      placeholder="Enter City Here" 
      value={location} 
      onChange={(event) => setLocation(event.target.value)}></input>
    <button type="submit" onClick={LocationSubmit}>Search</button>
  </form>
  
      <br/>
      <br/>
      {error && <p className="error-message">{error}</p>}
      {locationInputError && <p className="error-message">{locationInputError}</p>}
      <br/>
        <div className="row table table-dark">
          <table>
  				<thead>
    			  <tr>
							<th className="col-md-3">City</th>
							<th className="col-md-3">Temperature (°F)</th>
							<th className="col-md-3">Pressure (hPa)</th>
							<th className="col-md-3">Humidity (%)</th>
						</tr>
					</thead>
			    </table>
      </div>
      </div>
  )}