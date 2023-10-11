import { useState } from "react";
import { AppProvider, useAppContext } from './contexts/AppContext';

import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./components/BandForm";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  return (
    <div className="app">
      <AppProvider>
        <BandForm band={bands[0]} />
      </AppProvider>
    </div>
  );
}

export default App;
