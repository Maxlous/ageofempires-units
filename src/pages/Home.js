import { Link } from "react-router-dom";

const Home = () => {
  return (
    <article className="homepage">
      <div className="gradient-color">
        <div>
          <h1>Welcome to Age of Empires Units!</h1>
          <Link className="link" to="/units">
            Let's checkout them!
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Home;
