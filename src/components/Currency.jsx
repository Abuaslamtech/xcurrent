const Currency = (props) => {
  const { currentOptions, selectCurrency, onChangeCurrency } = props;
  return (
    <div>
      <input type="number" />
      <select value={selectCurrency} onChange={onChangeCurrency}>
        {currentOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
