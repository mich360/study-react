import React from 'react';
import styles from './MyComponent.module.css';
import Lottie from 'lottie-react';
import animationData from './animation.json';

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.myComponentTitle}>Comics!</h1>
      <p className={styles.customText}>This is my custom component.</p>
      <p style={{ color: 'red', fontWeight: 'bold' }}>Lottie animation</p>
      <div className={styles.lottieAnimation}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default MyComponent;
