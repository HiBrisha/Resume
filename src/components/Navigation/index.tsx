import logo from '~assets/image/logo.png'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='fixed left-0 w-screen h-fit flex justify-center z-[10]'>
      <header className='fixed top-4 w-3/4 h-18 flex justify-between items-center text-main-tcl bg-header-bkc z-20 rounded-full'>
        <h1 className='text-4xl flex flex-row items-center '>
          <img src={logo} alt='' srcSet='' className='object-cover' />
          MINH HIEU
        </h1>
        <div className='flex direction-row justify-around items-center w-1/2 h-full text-3xl'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/portfolio'>Portfolio</Link>
        </div>
      </header>
    </div>
  )
}
