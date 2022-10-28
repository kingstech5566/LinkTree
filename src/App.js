import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';   

import Profile from "./Components/Proflie";
import Links from "./Components/Links";

function App() {
  return (
    <div className="p-m-4">
     <Profile />
     <Links />
    </div>
  );
}

export default App;
