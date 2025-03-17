import React from 'react';
import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonFooter } from '@ionic/react';
import '@ionic/react/css/core.css';
import './App.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="custom-title">Hello Blessing App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Welcome to Ishola Blessing App!</h1>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <p className="footer-text">DAY 1 ASSIGMENT</p>
        </IonToolbar>
      </IonFooter>
    </IonApp>
  );
};

export default App;