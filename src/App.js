import React from 'react';
import Navigation from './components/navbar'
import Projects from './components/project'
import About from './components/about'
import Contact from './components/Contact'
import Footer from './components/footer'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
        <Navigation />

    <BrowserRouter>
      <Switch>

        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contact} />
        
      </Switch>
    </BrowserRouter>
    <Footer></Footer>
   </>
  );
}

export default App;
