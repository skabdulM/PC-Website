import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import Menu_Nav from "../components/menu-nav";
import "./Home.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './About.css'
const About: React.FC = () => {

  useEffect(()=>{
    Aos.init({duration:2000, delay:1000})
  },[])
  return (
    <>
      <div className="menu">
        <Menu />
      </div>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <div className="menu-nav">
              <Menu_Nav />
            </div>
            <div className="nav1">
              <NavBar />
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
         
        <div className="responsive-container-block bigContainer">
  <div className="responsive-container-block Container">
    <div className="responsive-container-block leftSide">
      <p className="text-blk heading">
        About US
      </p>
      <p className="text-blk subHeading">
        Semaj Africa is an online education platform that delivers video courses, programs and resources for Individual, Advertising &amp; Media Specialist, Online Marketing Professionals, Freelancers and anyone looking to pursue a career in digital marketing, Accounting, Web development, Programming. Multimedia and CAD design.
      </p>
    </div>
    <div className="responsive-container-block rightSide">
      <img className="number1img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"/>
      <img className="number2img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"/>
      <img className="number3img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"/>
      <img className="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/>
      <img className="number4vid" src = "../../public/aboutus.jpg" />
      <img className="number7img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"/>
      <img className="number6img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"/>
    </div>
  </div>
</div>
          
          
        </IonContent>
      </IonPage>
    </>
  );
};

export default About;
