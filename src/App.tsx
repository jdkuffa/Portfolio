import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from './components/Head.tsx';
import Header from './components/Header.tsx';
import Profile from './components/Profile.tsx';
import About from './components/About.tsx';
import Stack from './components/Background.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Head />
      <Header />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Profile />
                <About />
                <Stack />
                <Projects />
                <Contact />
              </>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;