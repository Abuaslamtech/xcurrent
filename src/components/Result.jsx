const Result = (props) => {
  const { convertedAmount, convertedCurrency } = props;
  return (
    <main className="rmain">
      <div className="rhead">
        <h4>RESULT</h4>
      </div>

      <section className="result">
        <article className="theOutput">
          <div id="outPut"> {convertedAmount}</div>
          <div className="oHeading">
            {convertedCurrency}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Result;
