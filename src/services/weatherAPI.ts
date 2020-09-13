const APIKEY = '87785fd894796a32a355c987c12eeb45';

const url = 'https://api.openweathermap.org/data/2.5';

type WeatherRequestType = {
  latitude: number;
  longitude: number;
};

export const getWeather = async (
  _: string,
  location: WeatherRequestType,
): Promise<any> => {
  const { latitude = 0, longitude = 0 } = location;
  const localWeatherUrl = `${url}/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${APIKEY}`;
  try {
    const result = await (await fetch(localWeatherUrl)).json();

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getWeather;
