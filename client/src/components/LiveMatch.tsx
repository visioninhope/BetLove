import "../styles/components/liveMatch.css";
const LiveMatch = () => {
  return (
    <div className="liveMatcheComponent">
      <div className="lmcCont">
        <button>Live</button>
        <div className="teams">
          <div className="left">
            <img src="./photos/realmadrid.png" alt="" />
          </div>
          <h4>vs</h4>
          <div className="right">
            <img src="./photos/realmadrid.png" alt="" />
          </div>
        </div>
        <h5>57'</h5>
        <div className="progressBar"></div>
        <div className="sportsLeague"></div>
        <div className="nameScores">
          <div className="top">
            <p>Chelsea</p>
            <span>3</span>
          </div>
          <div className="bottom">
            <p>Manchester United</p>
            <span>1</span>
          </div>
        </div>
        <div className="odds">
          <div className="home">
            <span>1</span>
            <p>2.74</p>
          </div>
          <div className="draw">
            <span>X</span>
            <p>2.3</p>
          </div>
          <div className="away">
            <span>2</span>
            <p>2.34</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatch;
