// libraries
import { ImQuotesRight } from "react-icons/im";
// styles
import "../Login.css";

export default function Quote() {
  return (
    <>
      <ImQuotesRight className="quotation-mark" />
      <blockquote>
        <p className="quote">
          Money is a terrible master but an excellent servant
        </p>
        <p className="quote">- P.T Bamum</p>
      </blockquote>
    </>
  );
}
