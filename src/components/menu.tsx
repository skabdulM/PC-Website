import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuToggle,
  IonButton,
  IonItem,
  IonPage,
  IonRadio,
  IonRadioGroup,
  RadioGroupCustomEvent,
} from "@ionic/react";
import "./navbar.css";

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader style={{ height: "6em" }} className="menu">
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonItem routerLink="/home">Home</IonItem>
            <IonItem routerLink="/about">About</IonItem>
            <IonItem routerLink="/members">Members</IonItem>
            <IonItem routerLink="/events">Events</IonItem>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
