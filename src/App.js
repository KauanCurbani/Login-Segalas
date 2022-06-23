import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login'
import Home from './pages/homepage';


function App() {

  return (
    <div className="App">
        <Routes>{/* o Router guarda as Rotas definidas */}
          <Route exact path="/" element={<LoginPage />} /> {/* Rota, path= "link", element= "a pagina a ser carregada" */}
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
