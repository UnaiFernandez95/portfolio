import Nav from './components/organisms/nav/Nav';
import AppRoutes from './components/Routes/Routes';
import CommandLine from './components/organisms/comandLine/CommandLine';
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./styles/color.css"
import "./styles/font.css";
import './App.css'

function App() {

  return (
    <div className="app">
      <SpeedInsights />
      <Nav />
      <CommandLine>
        <AppRoutes />
      </CommandLine>
    </div>
  );
}

export default App
