import React, { useState } from 'react';

const Home = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    setIsMoved(!isMoved);
  };

  return (
    <div 
      className={`transition-transform duration-100 ${isMoved ? 'bg-white' : ''} 
                  flex flex-col items-center justify-center h-svh bg-[#021d34] text-[#82acce]`}
    >
      <h1 className="text-5xl font-bold mb-4">William David Rodriguez</h1>
      <p className="text-xl inline-block">
        ¡Hola! - Bienvenido a este espacio.
      </p>
      <p className="text-xl mb-6 inline-block">
      Soy un desarrollador de software backEnd con experiencia en creación de páginas web.
      </p> 
      <button 
        onClick={handleClick} 
        className="bg-orange-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
      >
        Cambiar tema
      </button>
    <label className='text-center text-sm fixed bottom-5'>Esta pagina fue desarrollada con React y Tailwind CSS.</label>
    </div>
  );
};
  
  export default Home;