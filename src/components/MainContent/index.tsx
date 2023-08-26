import { SocialMedia } from './components/SocialMedia'
import { routerElement } from './routes'
export const MainContent = () => {
  return (
    <div className='flex text-center text-main-tcl text-2xl right-0 w-full h-full bg-main-bkc'>
      <div className='w-full h-full flex flex-col overflow-auto'>{routerElement}</div>
      <SocialMedia />
    </div>
  )
}
