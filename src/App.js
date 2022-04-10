import React from 'react'
import Fotter from './components/fotter';
import Navbar from './components/Navbar';
import {Route,Switch,HashRouter} from 'react-router-dom';
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
import Histeryofc from './components/CConcepts/Historyofc';
import Algorithm from './components/CConcepts/Algorithm';
import Controlstatements from "./components/CConcepts/Controlstatements"
import Looping from "./components/CConcepts/Looping"
import Multidimarray from "./components/CConcepts/Multidimarray"
import Singledimarray from "./components/CConcepts/Singledimarray"
import Stringhandling from "./components/CConcepts/Stringhandling"
import Twodimarray from "./components/CConcepts/Twodimarray"
import Types from './components/Datastructures/Types';
import Notations from './components/Datastructures/Notations';
import Infixtopost from './components/Datastructures/Infixtopost';
import Constructure from "./components/Cppconcepts/Constructure";
import Datatypes from "./components/Cppconcepts/Datatypes";
import Diffrence  from "./components/Cppconcepts/Diffrence";
import Oops from "./components/Cppconcepts/Oops";
import Operators from "./components/Cppconcepts/Operators"
import Passbyvalue from "./components/Cppconcepts/Passbyvalue"
import Scope from "./components/Cppconcepts/Scope"
import Typesting from "./components/Cppconcepts/Typesting"
/**java */
import Applet from "./components/Java/Applet"
import Paramtag from "./components/Java/Paramtag";
import Jvm from "./components/Java/Jvm";
import Multithreding from "./components/Java/Multithreding"
import Datatypesjava from "./components/Java/Datatypesjava"
import Constructuresjava from "./components/Java/Constructuresjava"
import Operatorsjava from "./components/Java/Operatorsjava"
import Stringhandingjava from './components/Java/Stringhandingjava';
import Cnotes from "./components/CConcepts/Cnotes"
import Downlable from './components/Downlable';
import Cppnotes from './components/Cppnotes';
import Datastru from './components/Datastru';
import Javanotes from './components/Javanotes';
function App() {
  return (<Provider>
 <HashRouter basename='/'>
       <Navbar/>
        <ScrollToTop/>  
        <Switch>
        <Route exact path="/register" component={Register}/>
         <Route exact path="/" component={Homepage}/>
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
        <Route exact path="/historyofC" component={Histeryofc}/>
        <Route exact path="/algorithm" component={Algorithm}/>
        <Route exact path="/looping" component={Looping}/>
        <Route exact path="/controlstatements" component={Controlstatements}/>
        <Route exact path="/singledimarray" component={Singledimarray}/>
        <Route exact path="/multdimarray" component={Multidimarray}/>
        <Route exact path="/Twodimarray" component={Twodimarray}/>
        <Route exact path="/stringhandling" component={Stringhandling}/>
        <Route exact path="/typesofds" component={Types}/>
        <Route exact path="/notations" component={Notations}/>
        <Route exact path="/infixtopostfix" component={Infixtopost}/>
        /**Cppproject */
        <Route exact path="/constructure" component={Constructure}/>
        <Route exact path="/datatypes" component={Datatypes}/>
        <Route exact path="/difference" component={Diffrence}/>
        <Route exact path="/oops" component={Oops}/>
        <Route exact path="/operators" component={Operators}/>
        <Route exact path="/passbyvalue" component={Passbyvalue}/>
        <Route exact path="/scope" component={Scope}/>
        <Route exact path="/Typecasting" component={Typesting}/>
        /**javaproject */
        <Route exact path="/applet" component={Applet}/>
        <Route exact path="/jvm" component={Jvm}/>
        <Route exact path="/datatypesjava"component={Datatypesjava}/>
        <Route exact path="/stringhandlingjava"component={Stringhandingjava}/>
        <Route exact path="/operatoresjava"component={Operatorsjava}/>
        <Route exact path="/multithread" component={Multithreding}/>
        <Route exact path="/constructurejava"component={Constructuresjava}/>
        <Route exact path="/paramtag" component={Paramtag}/>
        /**notes */
        <Route exact path="/cnotes" component={Cnotes}/>
        <Route exact path="/cppnotes" components={Cppnotes}/>
        <Route exact path="/jnotes" components={Javanotes}/>
        <Route exact path="/datastruc" component={Datastru}/>
        /**download */
        <Route exact path="/downlable" component={Downlable}/>
         <Route component={NotFound}/>
       </Switch>
     
       <Fotter/>
       </HashRouter>
  </Provider>
      
  );
}

export default App;
