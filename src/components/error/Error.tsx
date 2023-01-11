import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%', marginBottom: '40px' }} spacing={2}>
      <Alert sx={{ justifyContent: 'center' }} severity='error'>
        Щось пішло не так!!!
      </Alert>
    </Stack>
  );
}
