import { HeaderItem } from '../../../layout/services/header.service';

export const WeatherHeaderItems: Array<HeaderItem> = [
  {
    name: "Дата",
    description: "dt"
  },
  {
    name: "Температура (°C)",
    description: "temp.day"
  },
  {
    name: "Влажность (%)",
    description: "humidity"
  },
  {
    name: "Описание",
    description: "weather[0].description"
  },
  {
    name: "Скорость ветра (м/c)",
    description: "wind_speed"
  }
];
