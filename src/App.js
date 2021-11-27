import { useState } from 'react';
import './App.css';
import Ticket from './ticket';
import PageWraper from './PageWrapper';
import Ticketjson from './tickets.json';
import Paginacion from './paginacion';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

	let tickets = Ticketjson;

  const cargarPeliculas = () =>{
    tickets = tickets.slice(
    (paginaActual-1 ) * TOTAL_POR_PAGINA, 
  paginaActual * TOTAL_POR_PAGINA 
  );
}
  
  
  const totalPorPagina = ( ) => {
    let cantidadTotalDeTickets = Ticketjson.length;
    return Math.ceil(cantidadTotalDeTickets / TOTAL_POR_PAGINA) ;
  }

  cargarPeliculas();

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
   pagina={paginaActual}
   total={4} 
   onChange={(pagina) =>  {
   setPaginaActual (pagina)  } 
    } 
     />
   
	</PageWraper> 
  );
}

export default App;
