import { BrowserRouter, Routes, Route } from "react-router-dom";
import Values from "./pages/values";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Goals from "./pages/goals";
import Projects from "./pages/projects"
import Contact from "./pages/contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="goals" element={<Goals />} />
          <Route path="values" element={<Values />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
