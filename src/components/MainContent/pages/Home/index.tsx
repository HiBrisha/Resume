import { TypeWriter } from '~components/MainContent/components/TextContent'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link } from 'react-router-dom'

export const Home = () => {
  const texts = ["Hello, I'm Hieu!", "I'm a Web Developer"]
  return (
    <>
      <div className='w-full h-fit flex justify-start text-6xl text-type-tcl'>
        <TypeWriter texts={texts} delay={100} />
      </div>
      <p className='text-4xl text-left mt-12'>Hello, I am a Web Developer from Vietnam. I have extensive experience in creating web applications and digital solutions.</p>
      <div className='w-full h-50 flex items-center'>
        <div className='h-fit w-fit bg-header-bkc text-6xl rounded-full flex px-4 py-1 mt-8 items-center'>
          <Link to='contact' className='mb-4'>
            Contact <ChevronRightIcon style={{ fontSize: '40px' }} />
          </Link>
        </div>
      </div>
    </>
  )
}
