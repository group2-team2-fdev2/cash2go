
import "../PasswordAuth.css";
import { Link } from "react-router-dom";


export default function Legal() {
  return (
    <>
      <Link className="legal">Term of use</Link>
      <Link className="legal">Privacy policy</Link>
    </>
  );
}
