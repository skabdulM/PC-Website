import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuToggle,
  IonItem,
  IonIcon,
} from "@ionic/react";
import "./navbar.css";
import {
  calendar,
  home,
  informationCircle,
  logoWebComponent,
  people,
} from "ionicons/icons";
const Menu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader
          style={{ height: "6em", display: "flex" }}
          className="ion-align-items-center"
        >
          <IonToolbar>
            <IonItem lines="none">
              <IonIcon icon={logoWebComponent}></IonIcon>
              <IonTitle>Menu</IonTitle>
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonItem routerLink="/home">
              <IonIcon
                icon={home}
                size="medium"
                className="ion-margin-end"
              ></IonIcon>
              Home
            </IonItem>
            <IonItem routerLink="/members">
              <IonIcon
                icon={people}
                size="medium"
                className="ion-margin-end"
              ></IonIcon>
              Members
            </IonItem>
            <IonItem routerLink="/events">
              <IonIcon
                icon={calendar}
                size="medium"
                className="ion-margin-end"
              ></IonIcon>
              Events
            </IonItem>
            <IonItem routerLink="/about">
              <IonIcon
                icon={informationCircle}
                size="medium"
                className="ion-margin-end"
              ></IonIcon>
              About
            </IonItem>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
