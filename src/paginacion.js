export default function Paginacion (props) {
   
    const getPaginas = () => {
        const resultados = [];
        for (var i= 0; i < props.toal; i++)
        resultados.push( <a className="active" href="#">1</a>)
        return resultados;
      }
  return (
     

    <div className="topbar-filter">
          
     <div className="pagination2">          
     <span>Pagina {props.pagina} de {props.total}:</span>    
           
           
            <a href="#">{props.pagina}</a>
            <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
            </div>
                )
              } 