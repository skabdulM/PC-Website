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
         
          <div className="box">this is About page</div>
          
          
        </IonContent>
      </IonPage>
    </>
  );
};

export default About;
