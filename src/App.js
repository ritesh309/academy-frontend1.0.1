import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
// import Register from "./pages/Register/Register"
import RegisterPage from "./components/RegisterPage/RegisterPage"
import LoginPage from "./components/LoginPage/LoginPage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import TeacherRegister from './components/TeacherComponents/TeacherRegister';
import TeacherLogin from './components/TeacherComponents/TeacherLogin';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/facultylogin' component={TeacherLogin} />
        <Route path='/facultyregister' component={TeacherRegister} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
