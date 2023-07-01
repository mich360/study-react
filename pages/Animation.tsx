import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animation.json';
                       // LottieアニメーションのJSONファイルをインポートします


const Animation = () => {
  return <Lottie animationData={animationData} />;
  
};

export default Animation;
