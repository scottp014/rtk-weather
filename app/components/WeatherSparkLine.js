import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const WeatherSparkLine = ({ data, color }) => {
  return (
    <Sparklines data={data} svgHeight={100} svgWidth={200}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  );
};

export default WeatherSparkLine;