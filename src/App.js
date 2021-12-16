import { useState } from 'react';
import './App.css';
import Ticket from './ticket';
import PageWraper from './PageWrapper';

import Paginacion from './paginacion';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [tickets, setTickets] = useState([]);
  const TOTAL_POR_PAGINA = 7;

  //	let tickets = Ticketjson;

    const buscarTicket = async () =>{
      let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/M4RSH4L/Api_Tickets/main/db.json';
        
         /* busueda al server */
       var respuesta = await fetch (url, {
          "method": 'GET',
          "headers": {
          "Accept": 'application/json',
          "Content-Type": 'application/json',
          "origin": 'https://raw.githubusercontent.com/',
          "header": 'Access-Control-Allow-Origin'
         }
          }); 
       
      let json = await respuesta.json();
      setTickets(json);
      
      
      }

    

  const cargarPeliculas = () =>{
   /* tickets = tickets.slice(
    (paginaActual-1 ) * TOTAL_POR_PAGINA, 
  paginaActual * TOTAL_POR_PAGINA 
  );*/
}
  
  
  const totalPorPagina = ( ) => {
    let cantidadTotalDeTickets = Ticket.length;
    return Math.ceil(cantidadTotalDeTickets / TOTAL_POR_PAGINA) ;
  }

  

  return  (
	<PageWraper>

    <button onClick={buscarTicket}>prueba</button> 

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
