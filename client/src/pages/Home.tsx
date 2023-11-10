import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />

      <div className="homeCont">
        <SideMenu />
      </div>
    </div>
  );
};

export default Home;
