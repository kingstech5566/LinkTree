import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import React, { useState, useEffect } from "react";

import Profile from "./Components/Proflie";
import Links from "./Components/Links";
import Icons from "./Components/Icons";
import Footer from "./Components/Footer";

function App() {
  const [profile, setProfile] = useState({
    name: "404",
    bio: "-",
    avatar: "https://avatars.githubusercontent.com/u/112397171?v=4",
    links: [],
  }),

  useEffect(() => {
    fetch("/data/kingsleychijioke.json")
    .then((response) => response.json())
    .then((data) => setProfile(data));
  }, []);
  return (
    <div className="p-m-4">
      <Profile name={profile.name} bio={profile.bio} avatar={profile.avatar} />
      <Links links={prfile.links} />
      <Icons />
      <Footer />
      
    </div>
  );
}

export default App;
