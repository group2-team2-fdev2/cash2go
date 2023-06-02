import SideBar from "./components/SideBar";
import "../Dashboard/Dashboard.css"
import Navbar from "./Navbar/Navbar";
import Display from './display-component/displayBoard'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Display />
    </div>
  )
}
