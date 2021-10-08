import './App.css';
import Ticket from './ticket';
import PageWraper from './PageWrapper';


function App() {
	
  return (

	<PageWraper>

<Ticket 

titulo="Pass Line" 
calificacion="11.1"
fecha="2021"
director="Ronan Lavorato"
actores="TOm makensin"
Duracion=""
 />
<Ticket/>



<Ticket/>


	</PageWraper>
  );
}

export default App;
