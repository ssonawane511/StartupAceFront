/** @format */

import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const element = useRoutes(Routes);
  return <div className='App'>{element}</div>;
}

export default App;
