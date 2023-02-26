import { useEffect, useState } from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'
import UserHome from './components/UserSection/UserHome';
import UserSearch from './components/UserSection/UserSearch/UserSearch';
import Detail from './components/UserSection/UserSearch/Detail';
import ServiceFilter from './components/UserSection/ServiceFilter/ServiceFilter';
import Rankings from './components/UserSection/Rankings/Rankings';
import ProviderAuth from './components/ProviderSection/ProviderAuth/ProviderAuth';
import ProviderHome from './components/ProviderSection/ProviderHome';
import UpdateProInfo from './components/ProviderSection/UpdateQoS/UpdateProInfo';
import MyResources from './components/UserSection/MyResources/MyResources';
import SLATemplate from './components/UserSection/SLATemplate/SLATemplate';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Container maxWidth='lg' >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/authUser" exact component={Auth} />
          <Route path="/authProvider" exact component={ProviderAuth} />
          <Route path="/userHome" exact component={UserHome} />
          <Route path="/providerHome" exact component={ProviderHome} />
          <Route path="/providerHome/updateqos" exact component={UpdateProInfo} />
          <Route path="/userHome/search" exact component={UserSearch} />
          <Route path="/userHome/filter" exact component={ServiceFilter} />
          <Route path="/userHome/myresources" exact component={MyResources} />
          <Route path="/userHome/ranks" exact component={Rankings} />
          <Route path="/userHome/slaTemplate" exact component={SLATemplate  } />
          <Route path="/resource/:id" exact component={Detail} />
          
        </Switch>
        

      </Container>
</BrowserRouter>
    </>
  );
}

export default App;
