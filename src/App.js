import React from 'react'
import Fotter from './components/fotter';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from './context';
import WriteaRecommendation from './components/WriteaRecommendation';
import Homepage from './components/Homepage';
import AllProjects from './components/AllProject'
import QuestionCommunity from './components/QuestionCommunity';
import Community from './components/Community';
import Login from './components/Login';
import Register from './components/Register';
import ProjectPage from './components/ProjectPage';
import Blogs from "./components/Blogs"
import Datastructure from './components/Datastructure';
import Cproject from './components/Cproject';
import Recomandations from './components/recomandations';




function App() {
  return (<Provider>
 <BrowserRouter>
       <Navbar/>
        <ScrollToTop/>
        <Switch>
        <Route exact path="/register" component={Register}/>
         <Route exact path="/" component={Homepage}/>
         <Route exact path="/write-a-recomandation" component={WriteaRecommendation}/>
         <Route exact path="/recommendations" component={Recomandations}/>
         <Route exact path="/community"component={Community}/>
        <Route exact path="/AllProject" component={AllProjects}/>
        <Route exact path="/blogs" component={Blogs}/>
        <Route exact path="/project/:id" component={ProjectPage} />
      
        <Route exact path="/Datastructure" component={Datastructure}/>
        <Route exact path="/Cproject" component={Cproject}/>
        <Route exact path="/ask-a-question" component={QuestionCommunity}/>
        <Route path="/login" component={Login}/>
         <Route component={NotFound}/>
       </Switch>
       <Fotter/>
       </BrowserRouter>
  </Provider>
      
  );
}

export default App;
