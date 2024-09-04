
const Colors = {
    primary:"[#021d34]",
    secundary:"[#82acce]"
}

const liClass = `border-0 text-[#82acce] hover:text-orange-700 hover:bg-[#021d34]`

const Values = () => {

  return (
    <div 
      className={`flex flex-col items-center justify-center h-svh bg-[#021d34] text-[#82acce]`}
    >
      <h1 className="text-5xl font-bold mb-6">/myValues</h1>
      <div className="flex flex-col w-1/2 gap-6 items-center">
        <p className="text-2xl block">
          "Tus habitos se convierten en tus valores, tus valores se conveierten en tu destino".
        </p>
        <p className="text-2xl w-3/5">
        A lo largo de mi vida, he cultivado la paciencia, la tolerancia y el respeto, especialmente en mi interacción con el equipo. 
        </p>
        <p className="text-2xl mb-6 inline-block">
          Te invito a que trabajemos en nuestro caracter.
        </p>
        <ul className="flex-wrap flex">
          <li className={liClass}>Paciencia</li>
          <li className={liClass}>Respeto</li>
          <li className={liClass}>Tolerancia</li>
          <li className={liClass}>Amabilidad</li>  
        </ul> 
      </div>

    <label className='text-center text-sm fixed bottom-5'>This page was developed with React and Tailwind CSS.</label>
    </div>
  );
};
  
export default Values;