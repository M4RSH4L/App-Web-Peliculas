export default function Ticket (props) {

    return (
    <div className="movie-item-style-2">
    <img src= {props.img} alt=""/>
    <div className="mv-item-infor">
           <h6>
               <a href="moviesingle.html">{props.titulo} 
               <span>{props.fecha}</span>
               </a>
               </h6>
        <p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span> /10</p>
        <p className="describe">{props.children} </p>
       
        <p>RR.PP: <a href="#">Direccion:  {props.director}</a></p>
        <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>

        <p className="run-time">{props.Duracion}    .     
           <span>Direccion{props.location} </span>    .     <span>{props.release}</span></p>
    </div>
</div>
    )
}
