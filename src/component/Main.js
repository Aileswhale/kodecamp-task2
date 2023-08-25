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
        <div className="bodyDiv"><button>Twitter Link</button> </div>
        <div className="bodyDiv"><button>KodeCamp Team</button></div>
        <div className="bodyDiv"><button>KodeCamp Books</button></div>
        <div className="bodyDiv"><button>Python Books</button></div>
        <div className="bodyDiv"><button>Background Check for Coders</button></div>
        <div className="bodyDiv"><button>Design Books</button></div>

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
