import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import NavBar from "../components/navbar";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>this is about page</div>
      </IonContent>
    </IonPage>
  );
};

export default About;
