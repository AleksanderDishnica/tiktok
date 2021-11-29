import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Header from "./components/header";
import Likes from "./components/like";
import Comment from "./components/comment";
import Footer from "./components/footer";
import Home from "./routes/home";
import Contact from "./routes/contact";
import About from "./routes/about";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Header />
    <Comment />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);