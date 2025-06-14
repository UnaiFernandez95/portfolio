import Nav from './components/organisms/nav/Nav';
import AppRoutes from './components/Routes/Routes';
import CommandLine from './components/organisms/comandLine/CommandLine';

import "./styles/color.css"
import "./styles/font.css";
import './App.css'

function App() {

  return (
    <div className="app">
      <Nav />
      <CommandLine>
        <AppRoutes />
      </CommandLine>
    </div>
  );
}

export default App
