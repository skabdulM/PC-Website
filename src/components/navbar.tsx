import { IonItem, IonIcon } from "@ionic/react";
import { logoWebComponent } from "ionicons/icons";
import "./navbar.css";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <IonItem routerLink="/home">
          {/* <IonImg src="../../public/icon.svg" style={{ width: "3em" }}></IonImg> */}
          <IonIcon icon={logoWebComponent} color="light" size="large"></IonIcon>
        </IonItem>
        <ul className="nav">
          <li className="dropdown">
            <IonItem routerLink="/home">
              <button className="dropbtn">
                <label className="underline">Home</label>
              </button>
            </IonItem>
          </li>
          <li className="dropdown">
            <IonItem routerLink="/about">
              <button className="dropbtn">
                <label className="underline">About</label>
              </button>
            </IonItem>
          </li>
          <li className="dropdown">
            <IonItem routerLink="/members">
              <button className="dropbtn">
                <label className="underline">Members</label>
              </button>
            </IonItem>
          </li>
          <li className="dropdown">
            <IonItem routerLink="/events">
              <button className="dropbtn">
                <label className="underline">Events</label>
              </button>
            </IonItem>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
