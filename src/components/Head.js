import { RiCurrencyFill } from "react-icons/ri";

const Head = () => {
  return (
    <header>
      <h1 className="logo">
        X<span className="x">-current</span>
      </h1>
      <i className="currency">
        <RiCurrencyFill />
      </i>
    </header>
  );
};

export default Head;
