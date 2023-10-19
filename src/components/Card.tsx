import React, { useEffect } from "react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Card: React.FC = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
            
            <div>
                <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000' >

                    <IonCard style={{ 'height': '300px', 'width': '325px' }}>
                        <img
                            alt="Silhouette of mountains"
                            src="https://ionicframework.com/docs/img/demos/card-media.png"
                        />
                        <IonCardHeader>
                            <IonCardTitle>Card Title</IonCardTitle>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Here's a small text description for the card content. Nothing more,
                            nothing less.
                        </IonCardContent>
                    </IonCard>
                </div>
            </div>
            
        </>
    );
};

export default Card;
