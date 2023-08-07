import React from "react";
import "./App.css"
import { Outlet ,NavLink} from "react-router-dom";//Link အစား NavLink သုံးသွားပုံ

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>My Blogs</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      {/* {dynamically} */}
      <Outlet/>
    </div>
  );
};

export default App;
