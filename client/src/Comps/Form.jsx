import React from 'react'

const Form = ({handleFile,className}) => {
  return (
    <div className={className}>
    <label className="block mb-2 text-3xl font-poppins font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
    <input accept='image/*' onChange={(e)=>handleFile(e)} className="block w-full text-sm text-gray-900 border-[4px] border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
    <div className="mt-1 text-lg text-gray-200 dark:text-gray-300" id="user_avatar_help">Upload an image you'd like to see from a different perspective</div>
    </div>
  )
}

export default Form