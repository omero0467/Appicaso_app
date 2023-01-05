import React from "react";
import Landing from "./Pages/Landing";
import { Route,Routes } from "react-router-dom";
import Variation from "./Pages/Variation";
import EditBg from "./Pages/EditBg";
import NavFlow from "./Comps/NavFlow";
import { Navbar } from "./Comps";
function App() {
  return (
<>
{/* <Navbar></Navbar> */}
<NavFlow></NavFlow>
<Routes>
<Route path={'/'} element={<Landing/>}/>
<Route path={'/variation'} element={<Variation/>}/>
<Route path={'/edit'} element={<EditBg/>}/>
</Routes>
</>
  );
}

export default App;
