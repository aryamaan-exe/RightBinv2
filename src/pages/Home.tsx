import { IonCard, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import { playCircle, radio, library, search, statsChart, camera } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Stats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Last 7 days</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            hi
          </IonCardContent>
        </IonCard>
      </IonContent>
      
      <IonContent>
        <IonList inset={true}>
          <IonItem>
            <IonLabel>Hey</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hey</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonContent>
      <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <Hey />} exact={true} />
          <Redirect exact path="/" to="/search" />
          <Route path="/search" render={() => <Search />} exact={true} />

          </IonRouterOutlet>

          <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={statsChart} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={camera} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

const Hey: React.FC = () => {
  return (
    <IonContent></IonContent>
  );
}

const Search: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Last 7 days</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            hi
          </IonCardContent>
        </IonCard>
      </IonContent>
      
      <IonContent>
        <IonList inset={true}>
          <IonItem>
            <IonLabel>Hey</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Hey</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

    </IonPage>
  );
}

export default Home;
