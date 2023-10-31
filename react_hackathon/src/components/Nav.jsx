import { Link } from "react-router-dom";

const Nav = () => {
    return(
  <div>
     <Link to="/">
      <h2> Home </h2>
    </Link>
    <Link to="/categories">
      <h2> Categories</h2>
    </Link>
    
  </div>
    )
};

export default Nav;
