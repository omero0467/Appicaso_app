import React from 'react'
import { ImageInterface } from '../Comps'
import { editBg } from '../utils'
const EditBg = () => {
  return (  
    <>
    <div className="min-h-screen flex items-center justify-center">    
    <div className="container">
        <ImageInterface Type={'edit'} sendReqtoEdit={editBg} />
    </div>
</div>
    </>
  )
}

export default EditBg