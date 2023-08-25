import { ChevronRight, ChevronLeft } from '@mui/icons-material'
import { Present } from './component/Present'

export const Resume = () => {
  return (
    <>
      <div className='w-full h-fit flex flex-col justify-start pl-4 translate-y-[25px]'>
        <div className='w-full h-fit grid grid-cols-2 grid-rows-1'>
          <div className='flex flex-col justify-around items-start text-left'>
            <h1 className='text-6xl font-bold font-serif p-2'>Experience</h1>
            <h1 className='text-green-light font-semibold font-serif p-2'>Working with</h1>
          </div>
          <div className='flex justify-end items-center'>
            <div className='w-1/2 h-fit grid grid-cols-4 grid-rows-1'>
              <div>
                <h1 className='h-[55px] flex justify-center items-center rounded-full border-2 border-green-light cursor-pointer'>
                  <ChevronLeft style={{ fontSize: '60px' }} />
                </h1>
              </div>
              <div className='flex items-center'>
                <hr className='w-full bg-green-light' />
              </div>
              <div>
                <h1 className='h-[55px] flex justify-center items-center rounded-full border-2 border-green-light cursor-pointer'>
                  <ChevronRight style={{ fontSize: '60px' }} />
                </h1>
              </div>
              <div className='flex items-center'>
                <hr className='w-full bg-green-light' />
              </div>
            </div>
          </div>
        </div>
        <Present />
      </div>
    </>
  )
}
