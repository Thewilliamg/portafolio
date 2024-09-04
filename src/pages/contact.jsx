const Colors = {
  primary:"[#021d34]",
  secundary:"[#82acce]"
}

const liClass = `border-1 border-[#021d34] text-[#82acce] text-3xl hover:text-orange-700 hover:bg-[#021d34] font-light w-[200px] h-[200px]` 

const Contact = () => {

return (
  <div 
    className={`flex flex-col items-center justify-start gap-12 pt-20 h-svh bg-[#021d34] text-[#82acce]`}
  >
    <h1 className="text-5xl font-bold mb-16 mt-10">/contactaMe</h1>
    <div className="flex flex-col w-2/3 gap-6 items-center">
      <p className="text-4xl block">
        Puedes buscarme y comunicarte conmigo para presentarme tu proyecto por cualquiera de las siguientes redes:.
      </p>
      <p className="text-3xl mt-20 mb-2 inline-block text-[#82acce]">
        En este espacio te invito a que trabajemos en algunos valores esenciales:
      </p>
      <ul className="flex-wrap flex w-full justify-around">
        <li className={liClass}>GitHub</li>
        <li className={liClass}>Correo electronico</li>
        <li className={liClass}>LinkedIn</li>

      </ul> 
    </div>
  <label className='text-center text-sm fixed bottom-5'>Esta pagina fue desarrollada con React y Tailwind CSS.</label>
  </div>
);
};

export default Contact;