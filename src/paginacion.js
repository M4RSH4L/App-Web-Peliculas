export default function Paginacion (props) {
   
    const getPaginas = () => {
        const resultados = [];
        for (var i= 0; i < props.total; i++)
        return resultados;
        resultado.push (
           <a onClick={props.onChange} className="active" href="#">{(i + 1)}
           </a>
       );
        }

   return resultado;
        }

   

    <div className="topbar-filter">
          
     <div className="pagination2">          
     <span>Pagina {props.pagina} de {props.total}:</span>    
            
          
           {getPaginas()}
           
            <a href="#">{props.pagina}</a>
            <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
            </div>
              
              