// library
import { ImQuotesRight } from "react-icons/im";

export default function Quote() {
  return (
    <div className="Auth-quote-wrapper">
      <ImQuotesRight className="Auth-quotation-mark" />
      <blockquote>
        <p className="Auth-quote">
          Money is a terrible master but an excellent servant
        </p>
        <p className="Auth-quote">- P.T Bamum</p>
      </blockquote>
    </div>
  );
}
