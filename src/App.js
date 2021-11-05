import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages';
import About from './pages/about';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import Sidebar from './components/Sidebar';
import RecipeDetail from './components/RecipeDetail/Recipedetail';

function App() {
  //  const [isOpen, setIsOpen] = useState(false);
  //
  //  const toggle = () => {
  //    setIsOpen(!isOpen);
  //  };

  return (
    <div className='app' data-testid='test-app'>
      <Router>
        <Sidebar />
        <Navbar />
        <RecipeDetail/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/recipe/:id' component={RecipeDetail} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
