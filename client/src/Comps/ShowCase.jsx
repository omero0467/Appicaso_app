import React from 'react'
import SpinningGallery from './SpinningGallery'
import Alternatives from './Alternatives'
const ShowCase = () => {
  return (
    <div><div className={`mx-auto container glass p-4 grid grid-cols-2`}>
    <SpinningGallery/>
  <div className="max-w-lg p-4 mx-auto">
    <Alternatives />
  </div>
 <p className="place-self-center">prest</p>
</div></div>
  )
}

export default ShowCase