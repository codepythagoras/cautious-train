import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Faq from "./pages/Faq";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/faq' component={Faq} exact />
        <Route path='/about' component={About} exact />
        <Route path='/contact us' component={ContactUs} exact />
        <Route path='/dashboard' component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
