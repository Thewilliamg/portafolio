import { Outlet, Link } from "react-router-dom";
const liClassLayout = `text-lg text-[#021d34] font-bold p-[0.5%] flex items-center text-center min-w-max bg-[#82acce]/10 shadow-md rounded-[5%] hover:bg-[#FF5F1F]/40 hover:text-[#FFFFFF] ` 

const Layout = () => {
  return (
    <div className="w-full h-full">
      <nav className="w-full h-[10%] flex items-center justify-around">
        <ul className="flex flex-row justify-center items-center gap-20 w-auto">
          <li className={liClassLayout}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={liClassLayout}>
            <Link to="/etica">Etica y valores</Link>
          </li>
          <li className={liClassLayout}>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li className={liClassLayout}>
            <Link to="/contactame">Contactame</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;