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
      titulo: "" ,
      calificacion: "",
      fecha: " ",
      director:"",
      actores:"",
      Duracion:"",
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

   <Ticket 

     titulo="Wilkenny" 
     calificacion="6"
     fecha=" (2021)"
     director="Nico galvan"
     actores="TOm makensin"
     Duracion="18/20 hs"
     img="images/uploads/mv1.jpg">
     Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...

  </Ticket>

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
   calificacion="10.1"
   fecha="2022"
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
