import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import "./Home.css";
import NavBar from "../components/navbar";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>this is home page</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
