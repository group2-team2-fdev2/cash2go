// library
import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <div className="legal-wrapper">
      <Link className="legal">Terms of use</Link>
      <Link className="legal">Privacy policy</Link>
    </div>
  );
}
