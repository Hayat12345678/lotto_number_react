import "./lotto-number.css";

const LottoNumber = ({ lottoNumber, extra }) => {
  return (
    <>
      <div
        className="lotto-number"
        style={{
          backgroundColor: extra === true ? "rgb(170, 214, 224)" : undefined,
          // color: extra === true ? "white" : undefined,
        }}
      >
        {lottoNumber}
      </div>
    </>
  );
};

export default LottoNumber;
