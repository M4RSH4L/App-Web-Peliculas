import './App.css';
import Ticket from './ticket';
import PageWraper from './PageWrapper';
import Ticketjson from './tickets.json';
import Paginacion from './paginacion';

function App() {

	let tickets = Ticketjson;
  
  
  return  (
	<PageWraper>

{tickets.map ( ticket =>
      
      <Ticket
    calificacion={ticket.calificacion} 
     titulo={ticket.titulo} 
     fecha={ticket.fecha} 
     director={ticket.director} 
     actores={ticket.actores} 
     Duracion={ticket.Duracion} 
     release={ticket.release}
     img={ticket.img}
     location={ticket.location}>
        {ticket.descripcion}
      </Ticket> 

      )  }


   <Paginacion 
    pagina={}
    total={} 
    onChange={() =>  {
    alert (pagina)  } 
     }/>
   
 


	</PageWraper> 
  );
}

export default App;
