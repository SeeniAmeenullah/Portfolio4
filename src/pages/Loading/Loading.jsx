import "./Loading.css";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle">
            Thilak Ramanie
          </text>
        </svg>{" "}
        <br />
        <svg viewBox="0 0 1520 300">
          <text className="text2" x="50%" y="90%" textAnchor="middle">
            Full-stack developer
          </text>
        </svg>
      </div>
    </>
  );
};

export default Loading;
