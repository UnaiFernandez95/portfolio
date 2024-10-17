import Button from "../component-library/atoms/button/Button";
import "./page.css";

const Component = () => {
  return (
    <div className="cover">
      <div className="cover-inner">
        <header className="inner">
          <div className="twisted">
            <div className="border-line"></div>
            <h1 className="headline">coming soon</h1>
            <div className="border-line"></div>
          </div>
          <div className="inner"></div>
          <p className="p1">Unai Fernandez</p>
          <p className="p2">Software developer. Building the page</p>
        </header>
        <div className="c">
          <p className="co">
            contact:{" "}
            <a href="mailto:unaifernandez@outlook.com">
              unaifernandez@outlook.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Component;
