import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Tik Tok</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/home">Home</Link> {" "}
        <Link to="/about">About Us</Link> {" "}
        <Link to="/contact">Contact Us</Link> {" "}
      </nav>
    </div>
  );
}