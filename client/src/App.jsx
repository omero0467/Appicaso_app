import React from "react";
import { Hero, Navbar, Footer, SpinningGallery, Alternatives } from "./Comps";
import Landing from "./Pages/Landing";
import styles from "./styles";
import { Route,Routes } from "react-router-dom";
import Variation from "./Pages/Variation";
import EditBg from "./Pages/EditBg";

function App() {
  return (
<>
<Navbar></Navbar>
<Routes>
<Route path={'/'} element={<Landing/>}/>
<Route path={'/variation'} element={<Variation/>}/>
<Route path={'/edit'} element={<EditBg/>}/>
</Routes>
</>
  );
}

export default App;
