import React from 'react';
import styles from './card.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IWeatherFullData from '../../interfaces/WeatherFullData';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from 'react-router-dom';

interface CardProps {
  weather: IWeatherFullData[] | null | any;
  weatherMethod: any;
  // deleteCity: any;
  // weatherCity: any;
}

const Card = ({
  weather,
  weatherMethod,
}: // weatherCity,
// deleteCity
CardProps) => {
  return (
    <div className={styles.container} key={weather.id}>
      <div className={styles.buttonDelete}>
        <Button
          // onClick={() => deleteCity(weatherCity.id)}
          size='small'
          sx={{ color: 'black' }}
        >
          <DeleteOutlinedIcon />
        </Button>
      </div>
      <Link to='/fullInfoWeather'>
        <div className={styles.wrapper}>
          <div className={styles.place}>
            <div className={styles.city}>
              <h1 className={styles.title}>{weather.name}</h1>
            </div>
            <div className={styles.country}>
              <b>Країна</b>: {weather.sys.country}
            </div>
          </div>
          <div className={styles.parameter}>
            <div className={styles.temp}>
              <b>Температура:</b> {weather.main.temp}
            </div>
            <div className={styles.wind}>
              <b>Швидкість вітру:</b> {weather.wind.speed}
            </div>
            <div className={styles.visibility}>
              <b>Видимість:</b> {weather.visibility}
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.button}>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button
            type='submit'
            onSubmit={(e: React.MouseEvent<HTMLButtonElement>) => weatherMethod}
            variant='text'
            size='small'
            sx={{ color: 'orange' }}
          >
            <RefreshIcon />
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Card;
