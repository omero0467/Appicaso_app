import React from 'react'

const Form = ({handleFile,className,Type}) => {
  return (
    <>
    <div className={className}>
    <label className="block mb-2 text-3xl font-poppins font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
    <input accept='image/*' onChange={(e)=>handleFile(e)} className="block w-full text-sm text-gray-900 border-[4px] border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
    <div className="mt-1 text-lg text-gray-200 dark:text-gray-300" id="user_avatar_help">Upload an image you'd like to see from a different perspective</div>
    </div>
{Type==='edit'&&<div className={className}>
    <label className="block mb-2 text-3xl font-poppins font-medium text-purple-300 dark:text-white" htmlFor="user_avatar">Describe :</label>
    <input placeholder='*subject* in a lake view' required={true} onChange={(e)=>handleInput(e)} className="block w-64 text-sm text-gray-900 border-[4px] border-purple-300 rounded-lg cursor-pointer placeholder:text-gray-300 bg-purple-600 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300" aria-describedby="user_avatar_help" id="user_avatar" type="text"/>
    <div className="mt-1 text-lg text-gray-200 dark:text-gray-300" id="user_avatar_help">Provide context about your expected result. For example:<span className="text-emerald-300 font-mono font-semibold">"A Tiger floting in the ocean"</span></div>
    </div>}
    </>
  )
}

export default Form