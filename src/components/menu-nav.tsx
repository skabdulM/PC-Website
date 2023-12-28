import { IonIcon, IonImg, IonItem, IonMenuToggle } from "@ionic/react";
import "./menu-nav.css";
import { logoWebComponent, menu } from "ionicons/icons";

const Menu_Nav: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <IonItem routerLink="/home">
          <IonIcon icon={logoWebComponent} color="light" size="large"></IonIcon>
        </IonItem>
        <IonItem>
          <IonMenuToggle>
            {/* <IonImg src="../../public/icon-menu-white.svg"></IonImg> */}
            <IonIcon icon={menu} color="light" size="large" />
          </IonMenuToggle>
        </IonItem>
      </nav>
    </>
  );
};

export default Menu_Nav;
