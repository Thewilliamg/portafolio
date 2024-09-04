import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-[#82acce] w-full h-[7%] absolute flex items-center justify-around">
        <ul className="flex flex-row justify-center items-center gap-20 w-auto">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/etica">Etica y valores</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contactame">Contactame</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;