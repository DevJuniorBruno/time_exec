
import React from 'react';
import Lottie from 'react-lottie';
import animationLo from '../../hand.json'; 
import './animationLo.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const LottieHand = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className='animationLo'>
        <h1>
        Entrega realizada em poucos minutos
        </h1>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieHand;
