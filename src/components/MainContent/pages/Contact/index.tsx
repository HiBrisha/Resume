import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const Contact = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full mt-20 flex flex-col justify-start p-12' style={{ height: 'calc(100% - 50px)' }}>
        <h1 className='text-6xl text-left'>Contact</h1>
        <h2 className='text-3xl text-type-tcl text-left mt-4'>LET'S TALK</h2>
        <div className='w-full h-full grid grid-cols-2 grid-rows-1 gap-4 mt-8'>
          <div className='w-full h-full flex flex-col justify-around'>
            <div className='relative w-full h-20 rounded-full bg-main-bkc border-green-light border-2 '>
              <label htmlFor='inputName' className='absolute rounded-full -top-6 bg-main-bkc left-5 transition-all duration-300 text-white p-2'>
                Name *
              </label>
              <input type='text' id='inputName' className='bg-transparent w-full h-full rounded-full pl-4 focus:outline-none focus:ring focus:none' placeholder='ej:.HieuNguyen' />
            </div>
            <div className='relative w-full h-20 rounded-full bg-main-bkc border-green-light border-2 mt-4'>
              <label htmlFor='inputEmail' className='absolute rounded-full -top-6 bg-main-bkc left-5 transition-all duration-300 text-white p-2'>
              Email Address *
              </label>
              <input type='text' id='inputEmail' className='bg-transparent w-full h-full rounded-full pl-4 focus:outline-none focus:ring focus:none' placeholder='example@domain.com' />
            </div>
            <div className='relative w-full h-fit rounded-lg bg-main-bkc border-green-light border-2 mt-4'>
              <label htmlFor='inputMess' className='absolute -top-8 rounded-full bg-main-bkc left-5 transition-all duration-300 text-white p-2'>
              Message *
              </label>
              <textarea id="inputMess" rows={4} className="block p-2.5 w-full bg-transparent pl-4 focus:outline-none focus:ring focus:none" placeholder="Write your content here..."></textarea>
            </div>
            <div className='h-fit w-fit bg-transparent border-2 border-green-light text-3xl rounded-full flex px-4 py-1 mt-8 items-center'>
          <Link to='/' className=''>
            Send Message <ChevronRightIcon style={{ fontSize: '40px' }} />
          </Link>
        </div>
          </div>
          <div className='w-full h-full bg-header-bkc '>Hello world</div>
        </div>
      </div>
    </div>
  )
}
