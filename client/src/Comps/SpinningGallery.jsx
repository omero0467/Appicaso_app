
import { Carousel } from 'flowbite-react'
import { final, mask, original, resize } from '../assets'
const SpinningGallery = () => {
  return (
    <div id='showcase'>
        <div className="h-[600px] max-w-3xl glass p-2  ">
            <Carousel slideInterval={8000}>
                <img className='h-[600px] object-contain '
                  src={original}
                  alt="..."
                />
                <img className='h-[600px] object-contain'
                  src={mask}
                  alt="..."
                />
                <img className='h-[600px] object-contain'
                  src={resize}
                  alt="..."
                />
                <img className='h-[600px] object-contain'
                  src={final}
                  alt="..."
                />
               
              </Carousel>
        </div>
    </div>
  )
}

export default SpinningGallery