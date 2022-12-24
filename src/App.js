import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Head from "./components/Head";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
