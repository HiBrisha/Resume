import logo from '~assets/image/logo.png'
export const Navigation = () => {
  return (
    <header className='absolute top-4 w-3/4 h-18 flex items-center text-main-tcl bg-header-bkc z-20 rounded-full'>
      <img src={logo} alt='' srcSet='' className='object-cover' /> <h1 className='text-4xl ml-2'>MINH HIEU</h1>
      <div className='absolute right-0 flex direction-row justify-around items-center w-1/2 h-full text-3xl'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Resume</h1>
        <h1>Portfolio</h1>
      </div>
    </header>
  )
}
