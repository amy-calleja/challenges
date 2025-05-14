import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  let pages = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="Home">
      <h1>Home</h1>
      <h3>Leetcode-style Challenges</h3>
      <div className="nav">
        {pages.map((num, i) => {
          return (
            <Link className="links" to={`/challenge${num}`}>
              Challenge {num}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
