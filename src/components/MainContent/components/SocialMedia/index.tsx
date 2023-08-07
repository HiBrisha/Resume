import { Facebook, LinkedIn } from '@mui/icons-material'

export const SocialMedia = () => {
  return (
    <div className='lg:w-1/6 flex flex-col justify-end items-center h-screen border-l-2 border-white'>
      <Facebook style={{ fontSize: '40px', marginBottom: '40px' }} />
      <LinkedIn style={{ fontSize: '40px', marginBottom: '40px' }} />
    </div>
  )
}
