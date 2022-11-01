import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Profile from "./Components/Proflie";
import Links from "./Components/Links";
import { useState, useEffect } from "react";

function App() {
  const [profile, setProfile] = useState({

  });
  return (
    <div className="p-m-4">
      <Profile />
      <Links />
      <Icons />
      
    </div>
  );
}

export default App;
