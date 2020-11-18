import { Fragment } from 'react';
import './App.css';
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MovieList from './components/MovieList/MovieList';
//import { Provider } from "react-redux";
//import { configureStore } from '';

//const store = configureStore();

function App() {

  
  //console.log('aazad');
  return (
    
    <Fragment>
      <h1>Redux Movies</h1>
      <div className="App">
        <MovieList  />
        <MovieDetails />
      </div>
    </Fragment>
    
    );
}

export default App;
