import { RiCurrencyFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Result from "./Result";
import Footer from "./Footer";

var myHeaders = new Headers();
myHeaders.append("apikey", "TExse0ipTvDMY7tnz0HrLJMfmPxUMzlW");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const Form = () => {
  const [dropDownOptions, setDropDownOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[150];
        const secondCurrency = Object.keys(data.rates)[106];
        setDropDownOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(firstCurrency);
        setToCurrency(secondCurrency);
        setExchangeRates(data.rates);
      });
  }, []);

  //The conversion

  function handleConversion() {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const converted =
        (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
      setConvertedAmount(converted.toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  }

  return (
    <main>
      <header>
        <h1 className="logo">
          X<span className="x">-current</span>
        </h1>
        <i className="currency">
          <RiCurrencyFill />
        </i>
      </header>

      <section className="inputs">
        <div className="from">
          <label htmlFor="from">From</label>
          <br />
          <Dropdown
            dropDownOptions={dropDownOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          />
        </div>

        <div className="to">
          <label htmlFor="to">To</label>
          <br />
          <Dropdown
            dropDownOptions={dropDownOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
          />
        </div>

        <div className="amount">
          <label htmlFor="to">Amount</label>
          <br />
          <input
            type="number"
            value={amount}
            placeholder="   for example 50000"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleConversion}>
          Convert
        </button>
      </section>

      <Result
        convertedAmount={convertedAmount}
        convertedCurrency={toCurrency}
      />

      <Footer />
    </main>
  );
};

export default Form;
