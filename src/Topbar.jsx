import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="Topbar">
      <Link to={"/"} className="link">
        Home
      </Link>
    </div>
  );
};

export default Topbar;
