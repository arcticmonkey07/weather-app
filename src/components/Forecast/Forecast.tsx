import React, { FC } from 'react';
import './Forecast.css';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

const timestampConvert = (time: number, type: string) => {
  const unixTimestamp = time;
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  let humanDateFormat = '';
  if (type === 'date') {
    humanDateFormat = dateObject.toLocaleString("en-US", { day: "numeric", month: "numeric", year: "numeric" });
  } else if (type === 'time') {
    humanDateFormat = dateObject.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
  }
  return humanDateFormat;
};

const getIconHandler = (icon: any) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`
};

interface IForecastProps {
  cityName: string
  forecast: any
}

const Forecast: FC<IForecastProps> = ({ cityName, forecast }) => {

  const data = [];

  for (let i = 0; i < forecast.length; i++) {
    data.push({
      key: i,
      date: timestampConvert(forecast[i].dt, 'date'),
      temp: forecast[i].temp.day,
      feels: forecast[i].feels_like.day,
      weather: forecast[i].weather[0].description,
      weatherIcon: getIconHandler(forecast[i].weather[0].icon),
      pressure: forecast[i].pressure,
      humidity: forecast[i].humidity,
      sunrise: timestampConvert(forecast[i].sunrise, 'time'),
      sunset: timestampConvert(forecast[i].sunset, 'time'),
      wind: forecast[i].wind_speed
    })
  }

  console.log(data)

  return (
    <Table dataSource={data}>
      <ColumnGroup title={cityName}>
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Temp (°C)" dataIndex="temp" key="temp" />
        <Column title="Feels like (°C)" dataIndex="feels" key="feels" />
        <Column title="Weather" dataIndex="weather" key="weather" />
        <Column title="Icon" dataIndex='weatherIcon' key="weatherIcon" render={(weatherIcon) => (
          <img className='weatherIcon' src={weatherIcon}/>
        )} />
        <Column title="Pressure (hPa)" dataIndex="pressure" key="pressure" />
        <Column title="Humidity" dataIndex="humidity" key="humidity" />
        <Column title="Sunrise" dataIndex="sunrise" key="sunrise" />
        <Column title="Sunset" dataIndex="sunset" key="sunset" />
        <Column title="Wind Speed" dataIndex="wind" key="wind" />
      </ColumnGroup>
    </Table>
  )

};

export default Forecast;
