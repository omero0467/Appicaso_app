
import React from "react";
import { Hero, Footer,ShowCase } from "../Comps";
import styles from "../styles";

const Landing = () => {
  return (
    <div className="background w-full overflow-hidden">

    <div className={`${styles.boxWidth} mx-auto`}>
      <Hero></Hero>
    </div>
<div className="h-screen flex justify-center items-center">
      <ShowCase />
</div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Footer></Footer>
      </div>
    </div>
  </div>
  )
}

export default Landing