import { useNavigate } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      Step 3<button onClick={handleClick}>Next</button>
    </div>
  );
}
