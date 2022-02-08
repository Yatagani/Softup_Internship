import weatherData from "./weatherData";
import "./Weather.css";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Weather() {
  const description = ["Sunny", "Cloudy", "Rainy"];

  const random_weather = Math.floor(Math.random() * weatherData.length);
  const bgImg = weatherData[random_weather].backgroundImage;
  const random_temp = getRandomIntInclusive(
    weatherData[random_weather].lowTemp,
    weatherData[random_weather].highTemp
  );
  return (
    <div
      className="weather"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <img
        className="weather__image"
        src={weatherData[random_weather].imageRepresentation}
        alt="img"
      ></img>
      <div>
        Real Feel {random_temp} <span>&#176;</span>
        {"C"}
      </div>
      <div>{description[random_weather]} </div>
      <div>
        {weatherData[random_weather].highTemp +
          "/" +
          weatherData[random_weather].lowTemp}
        <span>&#176;</span>
      </div>
      <div>
        Wind speed: {weatherData[random_weather].windSpeed} {"km/h"}
      </div>
    </div>
  );
}

export default Weather;
