import { Link } from 'react-router-dom'
import sign from '~assets/image/sign.png'
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
              <input
                type='text'
                id='inputEmail'
                className='bg-transparent w-full h-full rounded-full pl-4 focus:outline-none focus:ring focus:none'
                placeholder='example@domain.com'
              />
            </div>
            <div className='relative w-full h-fit rounded-lg bg-main-bkc border-green-light border-2 mt-4'>
              <label htmlFor='inputMess' className='absolute -top-8 rounded-full bg-main-bkc left-5 transition-all duration-300 text-white p-2'>
                Message *
              </label>
              <textarea
                id='inputMess'
                rows={4}
                className='block p-2.5 w-full bg-transparent pl-4 focus:outline-none focus:ring focus:none'
                placeholder='Write your content here...'
              ></textarea>
            </div>
            <div className='h-fit w-fit bg-transparent border-2 border-green-light text-3xl rounded-full flex px-4 py-1 mt-8 items-center'>
              <Link to='/' className=''>
                Send Message <ChevronRightIcon style={{ fontSize: '40px' }} />
              </Link>
            </div>
          </div>
          <div className='w-full h-full p-8'>
            <div className='w-full h-full border-2 border-green-light rounded-[20px] grid grid-cols-1 grid-rows-4 p-4'>
              <div className='flex flex-col justify-start text-left'>
                <h1 className='text-3xl font-bold font-serif'>Hieu Nguyen</h1>
                <h1 className='text-[14px] text-green-light font-bold font-serif'>Developer</h1>
              </div>
              <div className='row-span-2 flex flex-col text-left'>
                <h1 className='text-2xl flex items-center'>
                  <span className='text-[16px] text-green-light font-semibold font-serif'>AGE:</span>
                  <span className='ml-[20px] text-[14px] font-semibold'>23</span>
                </h1>
                <h1 className='text-2xl flex items-center'>
                  <span className='text-[16px] text-green-light font-semibold font-serif'>RESIDENCE:</span>
                  <span className='ml-[20px] text-[14px] font-semibold font-serif'>VietNam</span>
                </h1>
                <h1 className='text-2xl flex items-center'>
                  <span className='text-[16px] text-green-light font-semibold font-serif'>Company:</span>
                  <span className='ml-[20px] text-[14px] font-semibold font-serif'>ESTEC</span>
                </h1>
                <h1 className='text-2xl flex items-center'>
                  <span className='text-[16px] text-green-light font-semibold font-serif'>ADDRESS:</span>
                  <span className='ml-[20px] text-[14px] font-semibold font-serif'>DaNang City</span>
                </h1>
                <h1 className='text-2xl flex items-center'>
                  <span className='text-[16px] text-green-light font-semibold font-serif'>PHONE:</span>
                  <span className='ml-[20px] text-[14px] font-semibold font-serif'>+84389742037</span>
                </h1>
                <h1 className='text-2xl flex items-center'>
                  <span className='text-[16px] text-green-light font-semibold font-serif'>EMAIL:</span>
                  <span className='ml-[20px] text-[14px] font-semibold font-serif'>Hieunm.engineer@gmail.com</span>
                </h1>
              </div>
              <div className='p-4 flex items-start justify-center'>
                <img src={sign} className='object-contain w-[300px] h-[82px]' alt='' srcSet='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
