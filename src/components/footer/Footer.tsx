import React, { FC } from 'react';
import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>
        <a href='#'>Footer</a>
      </h1>
    </div>
  );
};

export default Footer;
