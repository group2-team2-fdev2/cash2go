// styles
import "../styles/components.css";
// assets
import LaptopImage from "../assets/Laptop.png";

export default function Laptop() {
  return (
    <>
      <img src={LaptopImage} alt="Laptop" className="laptop" />
    </>
  );
}
