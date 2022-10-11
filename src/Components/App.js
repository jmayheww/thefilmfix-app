import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3004/criterion-database")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
}

export default App;
