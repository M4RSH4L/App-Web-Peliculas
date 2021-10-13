import './App.css';
import Ticket from './ticket';
import PageWraper from './PageWrapper';


function App() {
	let tickets = [

    {
      titulo: "Wilkenny" ,
      calificacion: "6",
      fecha: " (2021)",
      director:"Nico galvan",
      actores:"TOm makensin",
      Duracion:"18/20 hs",
      img: "images/uploads/mv1.jpg",
      descripcion: "      Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...", 
    } , 
     {
      titulo: "into the wild" ,
      calificacion: "",
      fecha: " ",
      director:"",
      actores:"",
      Duracion:"",
      img: "images/uploads/mv1.jpg",
    } ,
    {
      titulo: "blade runner" ,
      calificacion: "11",
      fecha: "1 May 2015",
      director:"Peyton Reed",
      actores:"Robert Downey Jr.,",
      Duracion:"2h21’",
      img: "images/uploads/mv1.jpg",
    } ,
    {
      titulo: "" ,
      calificacion: "",
      fecha: " ",
      director:"",
      actores:"",
      Duracion:"",
      img: "images/uploads/mv1.jpg",
    } ,
  ]
  return (

	<PageWraper>


    {tickets.map(Ticket=>
 <Ticket 

     calificacion={tickets.calificacion} 
     titulo={tickets.titulo} 
     fecha={tickets.fecha} 
     director={tickets.director} 
     actores={tickets.actores} 
     Duracion={tickets.Duracion} 
     img={tickets.img}>
          {tickets.descripcion}
  </Ticket>

)
    }
  
  <Ticket 

     titulo="Pass up" 
     calificacion="8"
     fecha=" (2021)"
     director="Ronan Lavorato"
     actores="TOm makensin"
     Duracion="18/20 hs"
     img="images/uploads/mv2.jpg">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...

     </Ticket>
  
  
  

    <Ticket
   titulo="Pass Line" 
   fecha="2022"
   calificacion="10.1" 
   director="Ronan Lavorato"
   actores="TOm makensin"
   Duracion=""
   img="images/uploads/mv3.jpg">
             Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...


   </Ticket>
    


	</PageWraper>
  );
}

export default App;
