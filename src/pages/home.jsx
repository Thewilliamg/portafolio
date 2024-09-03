import React, { useState } from 'react';
const Colors = {
    primary:"[#021d34]",
    secundary:"[#82acce]"
}


const Home = () => {
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    setIsMoved(!isMoved);
  };

  return (
    <div 
      className={`transition-transform duration-100 ${isMoved ? 'translate-y-[5%]' : ''} 
                  flex flex-col items-center justify-center h-svh bg-[#021d34] text-[#82acce] p-6`}
    >
      <h1 className="text-5xl font-bold mb-4">William David Rodriguez</h1>
      <p className="text-xl mb-6">
        Hi! Welcome to my workspace
        I'm a backend software developerSoy un desarrollador web con experiencia en la creación de aplicaciones web modernas. 
      </p>
      <button 
        onClick={handleClick} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Mover Layout
      </button>
    <label className='text-sm fixed bottom-5'>This page was developed with React and Tailwind CSS.</label>
    </div>
  );
};
  
  export default Home;