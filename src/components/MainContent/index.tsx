import { SocialMedia } from './components/SocialMedia'
import { TypeWriter } from './components/TextContent'
export const MainContent = () => {
  const text = "Hello, I'm a typewriter effect in React!"
  return (
    <>
      <div className='flex items-center text-center text-main-tcl text-2xl right-0 w-1/2 h-full bg-main-bkc'>
        <div className='information flex flex-col'>
          <div className='flex justify-start mx-8 text-4xl text-type-tcl'>
            <TypeWriter text={text} delay={100} />
          </div>
          <p>Hello, I am a Web Developer from Vietnam. I have extensive experience in creating web applications and digital solutions.</p>
        </div>
        <SocialMedia />
      </div>
    </>
  )
}
