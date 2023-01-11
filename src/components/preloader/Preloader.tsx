import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './preloader.module.scss';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <div className={styles.container}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant='determinate' {...props} />
        <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            display: 'flex',
            bottom: 0,
            top: 0,
          }}
        >
          <Typography
            variant='caption'
            component='div'
            color='text.secondary'
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
