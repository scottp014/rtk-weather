import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const handleConditions = (location) => {
  const locationConditions = {
    id: location.city.id,
    temp: [],
    pressure: [],
    humidity: [],
  }
  
  location.list.map((conditions) => {
    locationConditions.temp.push(conditions.main.temp);
    locationConditions.pressure.push(conditions.main.pressure);
    locationConditions.humidity.push(conditions.main.humidity);
  })
  return locationConditions;
  
}


export const RenderConditions = () => {
  const locations = useSelector((state) => state.weather.locations)
  return locations.map((condition) => {
    
    return (
      <div className="row" style={{textAlign: 'center', paddingTop: 20}} key={location}>
        <table className="table col-md-3">
        <tr>
        <td className="col-md-3" style={{paddingBottom: 10}}>{condition.city.name}</td>
        <td className="col-md-3">
          <Sparklines data={handleConditions(condition).temp} svgHeight={100} svgWidth={200}>
            <SparklinesLine color="blue"  />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <p>{Math.round(handleConditions(condition).temp[0])}°</p>
        </td>
        <td className="col-md-3">
          <Sparklines data={handleConditions(condition).pressure} svgHeight={100} svgWidth={200}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <p>{handleConditions(condition).pressure[0]}</p>
        </td>
        <td className="col-md-3">
          <Sparklines data={handleConditions(condition).humidity} svgHeight={100} svgWidth={200}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <p>{handleConditions(condition).humidity[0]} %</p>
        </td>
        </tr>
        </table>
      </div>
    )
  })
}

