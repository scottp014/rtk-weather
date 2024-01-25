import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchWeather }  from "../store/slices/weatherSlice";


export const LocationInput = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');

  const LocationSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeather(location));
    setLocation('');
 };
  return (
 <div className="row" style={{textAlign: 'center'}}>
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
      <br/>
        <div className="row table table-dark" style={{textAlign: 'center'}}>
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