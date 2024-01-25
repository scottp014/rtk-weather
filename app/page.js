'use client'
import { RenderConditions } from './components/WeatherDetails';
import { LocationInput } from "./components/LocationInput";

export default function Home() {
  return (
    <div>
      <LocationInput/>
      {RenderConditions()}
    </div>
  )
}