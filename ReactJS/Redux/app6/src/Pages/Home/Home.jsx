import "./Home.css";
import Topbar from "../../Componets/Topbar/Topbar";
import Sidebar from "../../Componets/Sidebar/Sidebar";
import Feed from "../../Componets/Feed/Feed";
import Rightbar from "../../Componets/Rightbar/Rightbar";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        <Login/>
        <Profile/>
        <Rightbar/>
      </div>
    </>
  );
}
