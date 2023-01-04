import React from "react";
import { Hero, Navbar, Footer, SpinningGallery, Alternatives } from "./Comps";
import Landing from "./Pages/Landing";
import styles from "./styles";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
<>
<Navbar></Navbar>
<Routes>
<Route path={'/'} element={<Landing/>}/>
</Routes>
</>
  );
}

export default App;
