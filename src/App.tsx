import Nav from './components/organisms/nav/Nav';
import AppRoutes from './components/Routes/Routes';

import "./styles/color.css"
import './App.css'

function App() {

  return (
    <div className="app">
    <Nav />
      <AppRoutes />
    </div>
  );
}

export default App
