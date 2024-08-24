import './App.css';

// Slick component import 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Routing imports
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import PlayPage from './Pages/PlayPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/plays' element={<PlayPage />} />
    </Routes>
  );
}

export default App;
