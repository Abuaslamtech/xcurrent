import { Link } from "react-router-dom";
import { MdPersonPin, MdArticle } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { useState } from "react";

const Footer = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    setSelected(id);
  }

  return (
    <footer>
      <Link to="/blog">
        <div
          id="blog"
          className={selected === 1 ? "clicked" : "blog"}
          onClick={() => handleClick(1)}
        >
          <i className="ficon">
            <MdArticle />
          </i>
        </div>
      </Link>
      <Link to="/">
        <div
          id="home"
          className={selected === 2 ? "clicked" : "home"}
          onClick={() => handleClick(2)}
        >
          <i className="ficon">
            <ImHome />
          </i>
        </div>
      </Link>
      <Link to="/about">
        <div
          id="about"
          className={selected === 3 ? "clicked" : "about"}
          onClick={() => handleClick(3)}
        >
          <i className="ficon">
            <MdPersonPin />
          </i>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
