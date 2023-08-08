export const About = () => {
  return (
    <>
      <div className='w-full h-1/2 flex items-end'>
        <header className=' text-6xl text-main-tcl text-left ml-4'>
          About Me
          <h2 className='text-4xl text-type-tcl mt-4'>My Story</h2>
        </header>
      </div>
      <div className='w-full h-full flex flex-col justify-center'>
        <div className='w-full h-fit flex flex-row justify-around'>
          <div className='w-1/2 h-fit px-4 text-left'>
            Hi, my name is Hieu Nguyen and I am from Phu Yen, Vietnam. I am a talented individual who excels in both design and development. I have a passion for creating beautiful
            and functional websites and applications, and I have a keen eye for detail that allows me to produce outstanding results.
          </div>
          <div className='w-1/2 h-fit px-4 text-left'>
            I used to work for companies specializing in digital transformation solutions for businesses, including web solutions and production management software. Additionally,
            I have experience in the fields of IoT and electronics.
          </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-2 gap-4'>
          <div className='flex justify-center text-left p-4 mt-8'>
            I have the skills and knowledge necessary to get the job done. I am dedicated to delivering high-quality work and I am always striving to improve my skills and stay
            up-to-date with the latest trends and technologies in my field..
          </div>
          <div className='grid grid-cols-2 grid-rows-1 gap-4 p-4'>
            <div className='grid grid-cols-2 grid-row-3 gap-4 pr-40'>
              <div className='text-type-tcl text-left'>AGE:</div>
              <div className='text-left'>23</div>
              <div className='text-type-tcl text-left'>FREELANCE:</div>
              <div className='text-left'>Avalible</div>
              <div className='text-type-tcl text-left'>PHONE:</div>
              <div className='text-left'>+84389742037</div>
            </div>
            <div className='grid grid-cols-2 grid-row-3 gap-4 pr-40'>
              <div className='text-type-tcl text-left'>RESIDENCE:</div>
              <div className='text-left'>VIETNAM</div>
              <div className='text-type-tcl text-left'>ADDRESS:</div>
              <div className='text-left'>Da Nang City</div>
              <div className='text-type-tcl text-left'>E-MAIL:</div>
              <div className='text-left'>hieunm.engineer@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
