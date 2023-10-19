import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonToolbar } from "@ionic/react";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import Menu_Nav from "../components/menu-nav";
import "./Home.css";
import Card from "../components/Card";
import './Members.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Members: React.FC = () => {

  useEffect(()=>{
    Aos.init();
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
          <div className="m-5 h3 core-members">
            Core Members 2022-2023
          </div>
          <div data-aos='fade-in'>
            <IonGrid class="ion-margin"  >
              <IonRow>
                <IonCol size-lg='3' size-md='4' size-sm='12'>
                  <Card></Card>
                </IonCol>
                <IonCol size-lg='3' size-md='4' size-sm='12'>
                  <Card></Card>
                </IonCol>
                <IonCol size-lg='3' size-md='4' size-sm='12'>
                  <Card></Card>
                </IonCol>
                <IonCol size-lg='3' size-md='4' size-sm='12'>
                  <Card></Card>
                </IonCol>
                <IonCol size-lg='3' size-md='4' size-sm='12'>
                  <Card></Card>
                </IonCol>
                <IonCol size-lg='3' size-md='4' size-sm='12'>
                  <Card></Card>
                </IonCol>
              </IonRow>
            </IonGrid>
            
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Members;
