import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import NavBar from "../components/navbar";
import Menu from "../components/menu";
import Menu_Nav from "../components/menu-nav";
import {
  logoFacebook,
  logoGithub,
  logoInstagram,
  logoLinkedin,
  newspaper,
} from "ionicons/icons";


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
        <IonContent>
          <section className="section1">
            <div>
              <h1 className="ion-no-margin">PC Website</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem adipisci quis itaque voluptatem ullam cupiditate
                ut sapiente, sed alias quia voluptates mollitia ipsum eum
                praesentium dolor tenetur earum impedit modi!
              </p>
            </div>
          </section>
          <section className="section2">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem adipisci quis itaque voluptatem ullam cupiditate
                ut sapiente, sed alias quia voluptates mollitia ipsum eum
                praesentium dolor tenetur earum impedit modi! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quos quibusdam qui,
                voluptatum amet ad totam assumenda sapiente molestias natus
                nemo! Repudiandae sint odio culpa quas veritatis porro. Vitae
                similique eum atque accusantium tempore voluptate reiciendis,
                beatae vel ullam itaque perspiciatis cupiditate fugit corrupti
                veniam, cumque officiis quis delectus, dolores iste. Quam labore
                expedita consectetur dolores perferendis dignissimos vitae
                excepturi vero.
              </p>
            </div>
          </section>
          <section className="section3">
            <div>
              <IonItem lines="none">
                <IonIcon icon={newspaper} color="light" size="large"></IonIcon>
                <h2 className="ion-no-margin">Recent News</h2>
              </IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size-lg="4" size-md="6" size-sm="6" size="12">
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/card-media.png"
                      />
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Here's a small text description for the card content.
                        Nothing more, nothing less.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size-lg="4" size-md="6" size-sm="6" size="12">
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/card-media.png"
                      />
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Here's a small text description for the card content.
                        Nothing more, nothing less.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size-lg="4" size-md="6" size-sm="6" size="12">
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/card-media.png"
                      />
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Here's a small text description for the card content.
                        Nothing more, nothing less.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size-lg="4" size-md="6" size-sm="6" size="12">
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/card-media.png"
                      />
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Here's a small text description for the card content.
                        Nothing more, nothing less.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size-lg="4" size-md="6" size-sm="6" size="12">
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/card-media.png"
                      />
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Here's a small text description for the card content.
                        Nothing more, nothing less.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size-lg="4" size-md="6" size-sm="6" size="12">
                    <IonCard>
                      <img
                        alt="Silhouette of mountains"
                        src="https://ionicframework.com/docs/img/demos/card-media.png"
                      />
                      <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                        Here's a small text description for the card content.
                        Nothing more, nothing less.
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </section>
          <section className="footer">
            <IonGrid>
              <IonRow style={{ fontWeight: "bolde", fontSize: "large" }}>
                <IonCol>Let's Connect!</IonCol>
                <IonCol>Social Media</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonIcon icon={logoGithub} /> Github
                </IonCol>
                <IonCol>
                  <IonIcon icon={logoInstagram} /> Instagram
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonIcon icon={logoLinkedin} /> LinkedIn
                </IonCol>
                <IonCol>
                  <IonIcon icon={logoFacebook} /> Facebook
                </IonCol>
              </IonRow>
            </IonGrid>
          </section>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
