import React from 'react';

const Background = () => {
  return (
    // Mudamos absolute para fixed e adicionamos transform-gpu para forçar aceleração de hardware
    <div className="fixed inset-0 z-0 pointer-events-none transform-gpu">
      <spline-viewer 
        url="https://prod.spline.design/ZndJi4aqN9OwgcvB/scene.splinecode"
        loading-library="lazy"
        events-target="none"
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      ></spline-viewer>

      {/* Escurecemos levemente o gradiente para compensar a redução do blur no passo 2 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent"></div>
    </div>
  );
};

export default Background;