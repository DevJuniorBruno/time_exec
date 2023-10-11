
import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../motorcycle.json'; 
import './lottieAnimation.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const LottieAnimation = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className='lottieAnimation'>
        <h1>
        Aguarde nosso motoboy fazer a retirada
        </h1>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
