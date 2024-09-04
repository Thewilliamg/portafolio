import { BrowserRouter, Routes, Route } from "react-router-dom";
import Values from "./pages/values";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Projects from "./pages/projects"
import Contact from "./pages/contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="etica" element={<Values />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="contactame" element={<Contact />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
