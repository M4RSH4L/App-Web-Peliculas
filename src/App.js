import './App.css';
import ListadoTicket from './ListadoTicket';
import Blog from './Blog'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Organizadores from './Organizadores';


function App() {

  return  (
    <BrowserRouter>
    <Switch>
      <Route path= "/Blog">
          <Blog/>
      </Route>

      <Route path= "/">
          <ListadoTicket/>
      </Route>

      <Route path= "/Organizadores">
          <Organizadores/>
      </Route>

    </Switch>
    </BrowserRouter>
  );
}
export default App;
