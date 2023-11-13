import Hero from "../components/Hero";
import Label from "../components/Label";
import Leagues from "../components/Leagues";
import LiveMatch from "../components/LiveMatch";
import LiveTrendingMatch from "../components/LiveTrendingMatch";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <div className="home">
      <SideMenu />
      <div className="homeCont">
        <Navbar />
        <div className="homeContent">
          <div className="left">
            <LiveTrendingMatch />
            <Leagues />
          </div>
          <div className="center">
            <Hero />
            <Label />
            <div className="liveMatchesParent">
              <LiveMatch />
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
