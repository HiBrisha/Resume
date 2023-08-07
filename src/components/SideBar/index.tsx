import avatar from '~assets/image/avatar.jpg'

export const SideBar = () => {
  return <div className='w-1/2 h-full bg-cover bg-no-repeat bg-center z-0' style={{ backgroundImage: `url(${avatar})` }}></div>
}
