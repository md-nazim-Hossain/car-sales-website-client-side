import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Booking from './components/Booking/Booking';
import ExploreCar from './components/ExploreCar/ExploreCar';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/exploreCar'>
            <ExploreCar></ExploreCar>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/book/:id'>
            <Booking></Booking>
          </PrivateRoute>
          <Route path='*' component={<NotFound/>}/>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
