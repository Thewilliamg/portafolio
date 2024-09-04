import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-[#82acce] w-full h-[7%] absolute flex items-center justify-around">
        <ul className="flex flex-row justify-center items-center gap-20 w-auto">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/goals">Professional goals</Link>
          </li>
          <li>
            <Link to="/values">Ethical values</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;