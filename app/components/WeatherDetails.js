import { useSelector } from "react-redux";
import WeatherSparkLine from "./WeatherSparkLine";


// function that creates an object of conditions for each new city added
const handleConditions = (location) => {
  const locationConditions = {
    id: location.city.id,
    name: location.city.name,
    temp: [],
    pressure: [],
    humidity: [],
  }
  // maps the passed in location and pushes the necessary conditions into the locationConditions object
  location.list.forEach((conditions) => {
    locationConditions.temp.push(conditions.main.temp);
    locationConditions.pressure.push(conditions.main.pressure);
    locationConditions.humidity.push(conditions.main.humidity);
  })
  return locationConditions;
}

// renders the conditions to be visible to the user, calls handleConditions to get specific conditions from the user added city
export const RenderConditions = () => {
  const locations = useSelector((state) => state.weather.locations)
  

  return locations.map((condition) => {
    const conditionsData = handleConditions(condition);

    return (
        <table key={condition.city.id} className="row">
          <tbody>
          <tr className="row" style={{ textAlign: 'center', paddingTop: 20 }}>
            <td className="col-md-3" style={{paddingTop: 35}}>{condition.city.name}</td>
            <td className="col-md-3">
              <WeatherSparkLine data={conditionsData.temp} color="blue" />
              <p>{Math.round(conditionsData.temp[0])}°</p>
            </td>
            <td className="col-md-3">
              <WeatherSparkLine data={conditionsData.pressure} color="green" />
              <p>{conditionsData.pressure[0]}</p>
            </td>
            <td className="col-md-3">
              <WeatherSparkLine data={conditionsData.humidity} color="orange" />
              <p>{conditionsData.humidity[0]} %</p>
            </td>
          </tr>
          </tbody>
        </table>
    )
  })
}

