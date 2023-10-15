import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import NavBar from "../components/navbar";

const Members: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>this is members page</div>
      </IonContent>
    </IonPage>
  );
};

export default Members;
