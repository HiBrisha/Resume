import { Name } from '~components/Name'
import { SideBar } from '~components/SideBar'
import { MainContent } from '~components/MainContent'
import { Navigation } from '~components/Navigation'

export const MainLayout = () => {
  return (
    <div className='flex flex-row w-full h-screen justify-center'>
      <Navigation />
      <SideBar />
      <MainContent />
    </div>
  )
}
