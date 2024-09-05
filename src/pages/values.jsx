const liClass = `border-1 border-[#021d34] text-[#82acce] text-3xl hover:text-orange-700 hover:bg-[#021d34] font-light ` 

const Values = () => {

  return (
    <div 
      className={`flex flex-col items-center justify-start gap-12 pt-20 h-svh bg-[#021d34] text-[#82acce]`}
    >
      <h1 className="text-5xl font-bold mb-16 mt-10">/eticayValores</h1>
      <div className="flex flex-col w-2/3 gap-6 items-center">
        <p className="text-4xl block">
          "Tus habitos se convierten en tus valores, tus valores se convierten en tu destino".
        </p>
        <p className="text-2xl text-orange-300 border- place-self-end">
          -Mahatma Gandhi. 
        </p>
        <p className="text-3xl mt-20 mb-2 inline-block text-[#82acce]">
          En este espacio te invito a que trabajemos en algunos valores esenciales:
        </p>
        <ul className="flex-wrap flex w-full justify-around">
          <li className={liClass}>Paciencia</li>
          <li className={liClass}>Respeto</li>
          <li className={liClass}>Tolerancia</li>
          <li className={liClass}>Amabilidad</li>  
          <li className={liClass}>Asertividad</li> 
        </ul> 
      </div>
    <label className='text-center text-sm fixed bottom-5'>This page was developed with React and Tailwind CSS.</label>
    </div>
  );
};
  
export default Values;