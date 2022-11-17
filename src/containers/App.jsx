import { Routes, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Comentarios from "../components/comentarios";
import ListPokemons from "../components/ListPokemon";
import FormLogin from "../Forms/FormLogin";
import FormRegister from "../Forms/FormRegister"
import CPokemons from "../components/CPokemon";
import Picture from "../components/Picture";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/picture" element={<Picture/>}/>
      <Route path="/crear" element={<CPokemons/>} />
      <Route path="/" element={<FormLogin/>} />
      <Route path="/Register" element={<FormRegister/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path="/pokemons" element={<ListPokemons/>}/>
      <Route path="/comentarios" element={<Comentarios/>}></Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </div>
  );
}

export default App
