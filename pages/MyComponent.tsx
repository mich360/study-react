import React from 'react';
import styles from './MyComponent.module.css';
import Lottie from 'lottie-react';
import animationData from './animation.json';

const Animation = () => {
  //追加
  return (
    <div className={styles.container}>
      
      {/* クラス名を指定してスタイルを適用 */}
      <h1 className={styles.myComponentTitle}>Comics!</h1>
      

<p className={styles.customText}>This is my custom component.</p>


<p style={{ color: 'red', fontWeight: 'bold' }}> Lottie animation</p>

      
      {/* Lottieアニメーションをレンダリングします */}
      <Lottie animationData={animationData} />
    </div>
  );
  //ここまで

  return <Lottie animationData={animationData} />;
  
};

export default Animation;







