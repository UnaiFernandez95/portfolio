import "./commandLine.css";

const CommandLine = () => {
  return (
    <>
      <div className="command-line">
        <div className="color-buttons">
          {/* <!-- circle: Ellipse rojo --> */}
          <div className="red-ellipse" />
          {/* <!-- circle: Ellipse Amarillo --> */}
          <div className="yellow-ellipse" />
          {/* <!-- circle: Ellipse Verde --> */}
          <div className="green-ellipse" />
        </div>
        <div className="text-area">
        </div>
      </div>
    </>
  );
}

export default CommandLine;
