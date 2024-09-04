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
      className={`transition-transform duration-100 ${isMoved ? '' : ''} 
                  flex flex-col items-center justify-center h-svh bg-[#021d34] text-[#82acce]`}
    >
      <h1 className="text-5xl font-bold mb-4">William David Rodriguez</h1>
      <p className="text-xl inline-block">
        Hi! Welcome to my workspace.
      </p>
      <p className="text-xl mb-6 inline-block">
        I'm a backend software developer with expertise by creating modern webs pages.
      </p> 
      <button 
        onClick={handleClick} 
        className="bg-orange-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
      >
        Mover Layout
      </button>
    <label className='text-center text-sm fixed bottom-5'>This page was developed with React and Tailwind CSS.</label>
    </div>
  );
};
  
  export default Home;