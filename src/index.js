import "./components/apiData";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Header from "./components/header";
import Post from "./components/post";
import Footer from "./components/footer";
import Home from "./routes/home";
import Contact from "./routes/contact";
import About from "./routes/about";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Post />
    <Footer />
  </BrowserRouter>,
  rootElement
);