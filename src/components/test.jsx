import { useEffect, useState } from "react";
import Currency from "./Currency";

var myHeaders = new Headers();
myHeaders.append("apikey", "Nb5O1TZt69skc7ky1k52aIBvX1AEh4PO");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
const Test = () => {
  const [currentOptions, setOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[150];
        const lastCurrency = Object.keys(data.rates)[106];
        setOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(lastCurrency);
        setToCurrency(firstCurrency);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <Currency
        currentOptions={currentOptions}
        selectCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      />
      <div>=</div>
      <Currency
        currentOptions={currentOptions}
        selectCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
      />
    </>
  );
};

export default Test;
