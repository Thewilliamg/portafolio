import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="w-full h-2/5">
        <ul>
          <li>
            <Link to="/">Home</Link>
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