import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Card from './components/card/Card';
import axios, { AxiosError } from 'axios';
import IWeatherFullData from './interfaces/WeatherFullData';
import FullInfoWeather from './components/fullInfoWeather/FullInfoWeather';
import CircularStatic from './components/preloader/Preloader';
import BasicAlerts from './components/error/Error';
import { Route, Routes } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const API_KEY = 'ffeaeae0f57f94ad25009d9d0f5dabe1';

const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [weather, setWeather] = useState<IWeatherFullData[] | null | any>(
    () => {
      const saved = localStorage.getItem('weather');
      if (saved) {
        const initialValue = JSON.parse(saved);
        return initialValue;
      }
      return [];
    }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // interface deleteCityProps {
  //   id: number;
  // }

  // const deleteCity = ({ id }: deleteCityProps) => {
  //   setWeather([
  //     ...weather.filter((weatherCity: any) => weatherCity.id !== id),
  //   ]);
  // };

  async function fetchWeather(
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement> | any
  ) {
    try {
      setError('');
      setLoading(true);
      event.preventDefault();
      const city = event.target.elements.city.value;
      const response = await axios.post<IWeatherFullData[]>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(response.data);
      // console.log(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(weather));
  }, [weather]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color='inherit'
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Routes>
          <Route
            path='/'
            element={
              <Form
                title='Введіть назву міста і натисніть на кнопку'
                weatherMethod={fetchWeather}
              />
            }
          />
        </Routes>
        {loading && <CircularStatic />}
        {error && <BasicAlerts />}
        <Routes>
          <Route
            path='/'
            // element={weather.map((weatherCity: any) => (
            //   <Card
            //     weather={weather}
            //     weatherMethod={fetchWeather}
            //     deleteCity={deleteCity}
            //     weatherCity={weatherCity}
            //     key={weatherCity.id}
            //   />
            // ))}
            element={
              weather && (
                <Card
                  weather={weather}
                  weatherMethod={fetchWeather}
                  // deleteCity={deleteCity}
                  key={weather.id}
                />
              )
            }
          />
        </Routes>
        <Routes>
          <Route
            path='/fullInfoWeather'
            element={weather && <FullInfoWeather weather={weather} />}
          />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
