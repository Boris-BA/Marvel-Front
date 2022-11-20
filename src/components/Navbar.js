import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <span>COMICS</span>
      </Link>
      <Link to={"/characters"}>
        <span>CHARACTERS</span>
      </Link>
      <Link to={"/favorites"}>
        <span>FAVORITES</span>
      </Link>
    </div>
  );
};
export default Navbar;
