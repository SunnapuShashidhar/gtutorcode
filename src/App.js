import React from 'react'
import Fotter from './components/fotter';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from './context';
import WriteaRecommendation from './components/WriteaRecommendation';
import Homepage from './components/Homepage';

import QuestionCommunity from './components/QuestionCommunity';
import Community from './components/Community';
import Login from './components/Login';
import Register from './components/Register';
import ProjectCard from './components/ProjectCard';
import ProjectPage from './components/ProjectPage'
import Blogs from "./components/Blogs"
import Datastructure from './components/Datastructure';
import Cproject from './components/Cproject';
import Recomandations from './components/recomandations';
import ProjectAdd from './components/ProjectAdd'
import AllProject from './components/AllProject'
import AddBlogs from './components/AddBlogs'
import BlogPage from './components/BlogPage'
import SolutionCommunity from './components/solutioncommunity';
import Cppproject from './components/Cppprojects';
import Javaproject from './components/Javaproject';
import Guidance from './components/Guidance';
import Request from './components/Request';
function App() {
  return (<Provider>
 <BrowserRouter>
       <Navbar/>
        <ScrollToTop/>
        <Switch>
        <Route exact path="/register" component={Register}/>
         <Route path="/" component={Homepage}/>
         <Route exact path="/write-a-recomandation" component={WriteaRecommendation}/>
         <Route exact path="/recommendations" component={Recomandations}/>
         <Route exact path="/community"component={Community}/>
         <Route exact path="/AllProject"component={AllProject}/>
        <Route exact path="/project/add"component={ProjectAdd}/>
        <Route exact path="/blogs" component={Blogs}/>
        <Route exact path="/request" component={Request}/>
        <Route exact path="/project/:id" component={ProjectPage} />
        <Route exact path="/Guidelines" component={Guidance}/>
        <Route exact path="/javaproject" component={Javaproject}/>
        <Route exact path="/Datastructure" component={Datastructure}/>
        <Route exact path="/Cproject" component={Cproject}/>
        <Route exact path="/Cppproject" component={Cppproject}/>
        <Route exact path="/blog/add" component={AddBlogs}/>
        <Route exact path="/blog/:id" component={BlogPage}/>
        <Route exact path="/ask-a-question" component={QuestionCommunity}/>
        <Route exact path="/ask-a-solution" component={SolutionCommunity}/>
        <Route path="/login" component={Login}/>
         <Route component={NotFound}/>
       </Switch>
       <Fotter/>
       </BrowserRouter>
  </Provider>
      
  );
}

export default App;
