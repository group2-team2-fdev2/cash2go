import { useNavigate, Link } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      Log In
      <button onClick={handleClick}>Next</button>
      <Link to="forgot-password">Forgot Password</Link>
      <Link to="sign-up">Sign Up</Link>
    </div>
  );
}
