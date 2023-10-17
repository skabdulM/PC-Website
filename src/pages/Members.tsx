import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import Menu_Nav from "../components/menu-nav";
import "./Home.css";

const Members: React.FC = () => {
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
          <div>this is members page</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Members;
