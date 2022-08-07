import cat2 from "../img/2.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="main-container">
          <h1>
            Welcome to CatMirer
            <br /> Send an Email to your crush <br /> anonymously{" "}
          </h1>
          <div className="main-img">
            <img src={cat2} alt="heart" className="cat2" />
            <img src={cat2} alt="heart" />
          </div>
          <button onClick={() => navigate("/mailer")}>Click me</button>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
