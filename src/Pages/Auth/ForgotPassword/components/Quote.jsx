// library
import { ImQuotesRight } from "react-icons/im";

export default function Quote() {
  return (
    <div className="quote-wrapper">
      <ImQuotesRight className="quotation-mark" />
      <blockquote>
        <p className="quote">
          Money is a terrible master but an excellent servant
        </p>
        <p className="quote">- P.T Bamum</p>
      </blockquote>
    </div>
  );
}
