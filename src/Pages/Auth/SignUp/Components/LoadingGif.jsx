// asset
import loadingGif from "../assets/loadingGif.svg";

export default function LoadingGif() {
  return (
    <>
      <img src={loadingGif} alt="Loading" className="loading-gif" />
    </>
  );
}
