import { IonButton, IonImg, IonItem, IonMenuToggle } from "@ionic/react";
import "./menu-nav.css";

const Menu_Nav: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <IonItem routerLink="/home">
          <IonImg src="../../public/icon.svg" style={{ width: "3em" }}></IonImg>
        </IonItem>
        <IonItem>
          <IonMenuToggle>
            <IonImg src="../../public/icon-menu-white.svg"></IonImg>
          </IonMenuToggle>
        </IonItem>
      </nav>
    </>
  );
};

export default Menu_Nav;
