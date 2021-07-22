import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./components/Login/Login";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app-body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="information">
                    <h4>Welcome!</h4>
                    <p>
                      You can add new channels and send realtime messages to the
                      channels
                    </p>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
