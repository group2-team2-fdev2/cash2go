import { useNavigate } from "react-router-dom";

export default function EmailRequest() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/forgot-password/new-password");
  };
  return (
    <div>
      Email Request
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
