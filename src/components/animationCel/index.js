
import React from 'react';
import Lottie from 'react-lottie';
import animationCel from '../../gpsCel.json'; 
import './animationCel.css';

// Substitua 'celMkt' pelo nome do seu arquivo JSON

 const LottieCel = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationCel,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      suppressHydrationWarning:true
    },
  };

  return (
    <div className='animationCel'>
        <h1>
            Peça seu orçamento pelo telefone ou WhatsApp        
        </h1>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieCel;
