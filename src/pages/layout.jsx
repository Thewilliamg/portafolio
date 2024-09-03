import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-gray-500 w-full h-[5%] absolute ">
        <ul className="flex flex-row justify-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/objetivos">Aims</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;