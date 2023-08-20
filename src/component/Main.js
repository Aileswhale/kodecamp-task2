import KodeHauz from './Images/KodeHauz Logo 1.png';
import github from "./Images/github.png";
import kodecamp from "./Images/kodecamp logo.png";
import profile__img from "./Images/profile__img.png";
import slack from "./Images/slack.png";
// import Images from "./Images/KodeHauz Logo 1.png";


const Main = () => {
  return (
    <div className="body">
      <div className="headerDiv">
        <img src={profile__img} alt="user"></img>
        <h2>John Doe</h2>
      </div>
      <div className="mainDiv headerDiv">
        <div className="bodyDiv"> Twitter Link</div>
        <div className="bodyDiv">KodeCamp Team</div>
        <div className="bodyDiv">KodeCamp Books</div>
        <div className="bodyDiv">Python Books</div>
        <div className="bodyDiv">Background Check for Coders</div>
        <div className="bodyDiv">Design Books</div>

        <div className="SocialDiv">
          <img src={slack} alt="slack logo"></img>
          <img src={github} alt="github logo"></img>
        </div>
      </div>
      <hr />
      <div className="footerDiv">
        <img src={kodecamp} alt="kodecamp logo"></img>
        <p> KodeCamp Internship Task</p>
        <img src={KodeHauz} alt="kodehauz logo"></img>
      </div>
    </div>
  );
};

export default Main;
