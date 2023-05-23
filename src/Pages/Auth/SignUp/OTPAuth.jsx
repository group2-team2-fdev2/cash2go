import { useNavigate } from "react-router-dom";

export default function Step2() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-up/3");
  };
  return (
    <div>
      Step 2<button onClick={handleClick}>Next</button>
    </div>
  );
}
