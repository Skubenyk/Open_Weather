import React from 'react';
import styles from './form.module.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface FormProps {
  title: string;
  weatherMethod: any;
}

const Form = ({ title, weatherMethod }: FormProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonDelete}></div>
      <h1 className={styles.title}>{title}</h1>
      <form className={styles.form} onSubmit={weatherMethod}>
        <input
          type='text'
          name='city'
          className={styles.input}
          placeholder='Введіть назву міста'
        />
        <Stack spacing={2} direction='row'>
          <Button type='submit' variant='contained'>
            Пошук
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
