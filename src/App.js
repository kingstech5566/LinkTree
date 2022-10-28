import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';   

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function App() {
  return (
    <div>   
<Avatar image="kingsley.jpg" size="xlarge">
    <Badge value="4" severity="danger" />
</Avatar>
<p>Kingsley Chijioke</p>
    </div>
  );
}

export default App;
