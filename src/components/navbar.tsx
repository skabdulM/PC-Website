import { IonItem } from "@ionic/react";
import "./navbar.css";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav">
          <li>
            <IonItem routerLink="/home">Home</IonItem>
          </li>
          <li>
            <IonItem routerLink="/about">About</IonItem>
          </li>
          <li>
            <IonItem routerLink="/members">Members</IonItem>
          </li>
          <li>
            <IonItem routerLink="/events">Events</IonItem>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
