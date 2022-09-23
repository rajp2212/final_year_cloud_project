/* import { useEffect, useState } from 'react'; */
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'
import UserHome from './components/UserSection/UserHome';
import HomeSlider from './components/UserSection/Slider/HomeSlider';
import UserSearch from './components/UserSection/UserSearch/UserSearch';
import Detail from './components/UserSection/UserSearch/Detail';
import ServiceFilter from './components/UserSection/ServiceFilter/ServiceFilter';
import Rankings from './components/UserSection/Rankings/Rankings';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Container maxWidth='lg' >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/authUser" exact component={Auth} />
          <Route path="/userHome" exact component={UserHome} />
          <Route path="/userHome/search" exact component={UserSearch} />
          <Route path="/userHome/filter" exact component={ServiceFilter} />
          <Route path="/userHome/ranks" exact component={Rankings} />
          <Route path="/:id" exact component={Detail} />
          
        </Switch>
        

      </Container>
</BrowserRouter>
    </>
  );
}

export default App;
