import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import TopNav from './components/TopNav';

// Pages
import Home from './pages/Home'
import CoutryDetails from './pages/CoutryDetails'
// import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-lighterGray dark:bg-darkerBlue min-h-screen">
        <header className="bg-white dark:bg-darkBlue shadow">
          <TopNav />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:name" component={CoutryDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
