import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <div className="home">
      <SideMenu />
      <div className="homeCont">
        <Navbar />
        <div className="homContent">
          <div className="left"></div>
          <div className="center"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
