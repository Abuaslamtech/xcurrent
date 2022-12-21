const Dropdown = (props) => {
  const { dropDownOptions, selectedCurrency, onChangeCurrency } = props;
  return (
    <>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {dropDownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
