// component
import ArrowRight from "./ArrowRight";

export default function Button() {
  return (
    <button type="submit" className="button-wrapper">
      <span className="button-text">Next</span>
      <ArrowRight />
    </button>
  );
}
