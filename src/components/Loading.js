import React from 'react';
import homerHead from '../assets/homer-head.png';
import styles from './Loader.css';

export default function Loading() {
  return <img className={styles.Loader} src={homerHead} />;
}
