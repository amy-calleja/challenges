import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <h3>Leetcode-style Challenges</h3>
      <div className="nav">
        <Link className="links" to={"/challenge1"}>
          Challenge 1
        </Link>
        <Link className="links" to={"/challenge2"}>
          Challenge 2
        </Link>
        <Link className="links" to={"/challenge3"}>
          Challenge 3
        </Link>
        <Link className="links" to={"/challenge4"}>
          Challenge 4
        </Link>
        <Link className="links" to={"/challenge5"}>
          Challenge 5
        </Link>
      </div>
    </div>
  );
}
