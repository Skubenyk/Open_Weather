interface IWeatherShortData {
  id: number;
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
}
export default IWeatherShortData;
