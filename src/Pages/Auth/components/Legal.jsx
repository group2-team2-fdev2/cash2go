// library
import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <div className="Auth-legal-wrapper">
      <Link className="Auth-legal">Terms of use</Link>
      <Link className="Auth-legal">Privacy policy</Link>
    </div>
  );
}
