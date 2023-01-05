import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const SelectSize = ({isLoading,currentSize,clickHandle}) => {

  return (
    <div className='h-full xs:my-8 max-h-[600px]'>

<h3 className="mb-5 text-3xl font-medium text-gray-200 dark:text-gray-400">Choose Size:</h3>
<ul className="h-full space-y-8">
    <li value={'small'} className='relative' onClick={(e)=>isLoading?null:clickHandle(256,e)}>

        <label htmlFor="react-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block ">
                <div className="w-full text-lg font-semibold">Small</div>
                <div className="w-full pt-12 text-sm">Output size of 256X256</div>
            </div>
                {currentSize===256&&<CheckCircleIcon className='h-1/3 text-purple-600 absolute top-4 right-4'/>}
        </label>
    </li>
    <li value={'med'} className='relative' onClick={(e)=>isLoading?null:clickHandle(512,e)}>

        <label htmlFor="flowbite-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block relative">
                <div className="w-full text-lg font-semibold">Medium</div>
                <div className="w-full  pt-12 text-sm">Output size of 512X512</div>
            </div>
            {currentSize===512&&<CheckCircleIcon className='h-1/3 text-purple-600 absolute top-4 right-4'/>}
        </label>
    </li>
    <li value={'large'} className='relative' onClick={(e)=>isLoading?null:clickHandle(1024,e)}>
        <label htmlFor="angular-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block ">
                <div className="w-full text-lg font-semibold">Large</div>
                <div className="w-full  pt-12 text-sm">Max Output size of 1024X1024</div>
            </div>
            {currentSize===1024&&<CheckCircleIcon className='h-1/3 text-purple-600 absolute top-4 right-4'/>}
        </label>
    </li>
</ul>

    </div>
  )
}

export default SelectSize