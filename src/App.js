import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar  from "./NavBar.js";
import Homepage from './Homepage';
import Menu from './Menu';
import QuestionShowPage from './QuestionShowPage';

// https://opentdb.com/api_config.php API Documentation
// https://opentdb.com/api_category.php category list
// https://opentdb.com/api_token.php?command=request session token



function App() {
  return (
    <Router>
      <div className="App">
{/* sign in to save score - make a rails backend to handle users and scores */}
          <NavBar/>

          <Routes>

            <Route 
              path="/" 
              index 
              element={<Homepage/>} 
              />

            <Route 
              path="/menu" 
              index 
              element={<Menu/>} 
              />

            <Route 
              path="/question" 
              index 
              element={<QuestionShowPage/>} 
              />

          </Routes>

      </div>
    </Router>
  );
}

export default App;
