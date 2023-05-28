// styles
import "../Login.css";
// components
import Laptop from "./Laptop";
import Cash2goLogo from "./Cash2goLogo";
import Quote from "./Quote";

export default function LeftLoginLayout() {
  return (
    <div className="layout">
      <div className="laptop-wrapper">
        <Laptop />
      </div>
      <div className="cash2go-wrapper">
        <Cash2goLogo />
      </div>
      <div className="quote-wrapper">
        <Quote />
      </div>
    </div>
  );
}
