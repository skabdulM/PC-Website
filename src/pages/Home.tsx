import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import "./Home.css";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import Menu_Nav from "../components/menu-nav";

const Home: React.FC = () => {
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
          <div>this is home page</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
