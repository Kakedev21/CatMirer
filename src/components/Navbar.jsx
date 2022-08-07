import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-container">
        <h1 onClick={() => navigate("/")}>CatMirer</h1>
        <div className="nav-logos">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
