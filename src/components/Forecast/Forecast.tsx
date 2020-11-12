import React, { FC } from 'react';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

const timestampConvert = (time: number, type: string) => {
  const unixTimestamp = time;
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  let humanDateFormat = '';
  if (type === 'date') {
    humanDateFormat = dateObject.toLocaleString("en-US", {day: "numeric", month: "numeric", year: "numeric"});
  } else if (type === 'time') {
    humanDateFormat = dateObject.toLocaleString("en-US", {hour: "numeric", minute: "numeric"});
  }
  return humanDateFormat;
};

interface IForecastProps {
  cityName: string
  forecast: any
}

const Forecast: FC<IForecastProps> = ({ cityName, forecast}) => {

  const data = [];

  for (let i = 0; i < forecast.length; i++) {
    data.push({
      key: i,
      date: timestampConvert(forecast[i].dt, 'date'),
      temp: forecast[i].temp.day,
      feels: forecast[i].feels_like.day,
      pressure: forecast[i].pressure,
      sunrise: timestampConvert(forecast[i].sunrise, 'time'),
      sunset: timestampConvert(forecast[i].sunset, 'time')
    })
  }

  return (
    <Table dataSource={data}>
      <ColumnGroup title={cityName}>
        <Column title="Date" dataIndex="date" key="date" />
        <Column title="Temp (°C)" dataIndex="temp" key="temp" />
        <Column title="Feels like (°C)" dataIndex="feels" key="feels" />
        <Column title="Pressure (hPa)" dataIndex="pressure" key="pressure" />
        <Column title="Sunrise" dataIndex="sunrise" key="sunrise" />
        <Column title="Sunset" dataIndex="sunset" key="sunset" />
      </ColumnGroup>
    </Table>
  )

};

export default Forecast;
