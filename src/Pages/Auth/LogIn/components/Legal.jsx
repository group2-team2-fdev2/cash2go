// library
import { Link } from "react-router-dom";
// style
import "../LogIn.css";

export default function Legal() {
  return (
    <>
      <Link className="legal">Terms of use</Link>
      <Link className="legal">Privacy policy</Link>
    </>
  );
}
