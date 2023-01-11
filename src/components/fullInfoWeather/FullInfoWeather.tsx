import React from 'react';
import styles from './fullInfoWeather.module.scss';
import IWeatherFullData from '../../interfaces/WeatherFullData';
import { Link } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';

interface FullInfoWeatherProps {
  weather: IWeatherFullData[] | null | any;
}

const FullInfoWeather = ({ weather }: FullInfoWeatherProps) => {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <ReplyIcon sx={{ fontSize: '30px' }} />
      </Link>
      <div className={styles.city}>
        <h1 className={styles.title}>{weather.name}</h1>
      </div>
      <div className={styles.country}>
        <b>Країна</b>: {weather.sys.country}
      </div>
      <div className={styles.temp}>
        <b>Температура:</b> {weather.main.temp}
      </div>
      <div className={styles.wind}>
        <b>Швидкість вітру:</b> {weather.wind.speed}
      </div>
      <div className={styles.visibility}>
        <b>Видимість:</b> {weather.visibility}
      </div>
      <div className={styles.tempFeels}>
        <b>Температура відчувається як:</b> {weather.main.feels_like}
      </div>
      <div className={styles.tempMax}>
        <b>Температура максимальна:</b> {weather.main.temp_max}
      </div>
      <div className={styles.tempMin}>
        <b>Температура мінімальна:</b> {weather.main.temp_min}
      </div>
      <div className={styles.seaLevel}>
        <b>Рівень моря:</b> {weather.main.sea_level}
      </div>
      <div className={styles.gust}>
        <b>Пориви вітру:</b> {weather.wind.gust}
      </div>
      <div className={styles.sunrise}>
        <b>Схід сонця:</b> {weather.sys.sunrise}
      </div>
      <div className={styles.sunset}>
        <b>Захід сонця:</b> {weather.sys.sunset}
      </div>
      <div className={styles.humidity}>
        <b>Вологість:</b> {weather.main.humidity}
      </div>
    </div>
  );
};

export default FullInfoWeather;
