import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      New Password<button onClick={handleClick}>Next</button>
    </div>
  );
}
