export const apis = {
    openweathermap: {
      uri: 'https://api.openweathermap.org/data/2.5/weather',
      params:{
          APPID: 'cbd492f0052e5e79b4b5f7b443b32cf6'}
      },
    apixu: {
      uri: 'http://api.apixu.com/v1/current.json',
      params:{
        key: '2756e1a1975b4f9b83981659191106'}
      },
    }

export function parseWeatherResponse(api, response){
  switch (api) {
    case 'openweathermap':
      return parseOpenWeatherResponse(response.data);
    case 'apixu':
      return parseApixuResponse(response.data);
    default:
      return false;
  }
}

function parseOpenWeatherResponse(data) {
  var temp = data.main.temp - 273.15;
  var tempMin = data.main.temp_min - 273.15;
  var tempMax = data.main.temp_max - 273.15;
 return  {
   'Temp(C)': temp.toFixed(1),
   'Humidity(%)': data.main.humidity,
   'Temp(min)': tempMin.toFixed(1),
   'Temp(max)': tempMax.toFixed(1),
   Description: data.weather[0].description};
}

function parseApixuResponse({current}){
  return {
    'Temp(C)': current.temp_c,
    'Wind(kph)': current.wind_kph,
    WindDir: current.wind_dir,
    Description: current.condition.text,
    'Humidity(%)': current.humidity
  };
}
