import React from 'react';
import Navigation from './components/navbar'
import Projects from './components/project'
import About from './components/about'
import Contact from './components/Contact'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Navigation />
    <Projects></Projects>
    <About></About> 
    <Contact></Contact>  
    <Footer></Footer>
   </>
  );
}

export default App;
