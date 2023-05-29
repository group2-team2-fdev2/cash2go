// styles
import "../PasswordAuth.css";
// components
import Cash2goLogo from './Cash2goLogo'
import Steps from "./steps";
import { LineIcon } from "./icons";

export default function LeftSignUpLayout() {
  return (
    <div className="layout">
      <div className="alt_cash2go-wrapper">
        <Cash2goLogo />
      </div>
      <div className="iconn"><LineIcon/></div>
      <div className="steps-layout"><Steps/></div>
    </div>
  )
}
