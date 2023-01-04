import React from "react";
import { Hero, Navbar, Footer, Showcase, Alternatives } from "./Comps";
import styles from "./styles";
function App() {
  return (
    <div className="background w-full overflow-hidden">
      <Navbar></Navbar>

      <div className={`${styles.boxWidth} mx-auto`}>
        <Hero></Hero>
      </div>

      <div className={`mx-auto container glass p-4 my-4 grid grid-cols-2`}>
          <Showcase/>
        <div className="max-w-lg p-4 mx-auto">
          <Alternatives />
        </div>
       <p className="place-self-center">prest</p>
      </div>
      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
