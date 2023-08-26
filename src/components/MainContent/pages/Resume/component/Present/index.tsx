interface resumeProps {
  title: string
  time: string
  content: string
}
export const Present: React.FC<resumeProps> = ({ title, time, content }) => {
  return (
    <>
      <div className='w-full fit mt-16 font-serif flex justify-start items-center'>
        <h3 className='w-fit h-fit text-green-light rotate-90 ml-4'>{time}</h3>
        <h3 className='w-[100px] h-[40px] flex items-center text-green-light font-semibold text-start text-white'>{title}</h3>
      </div>
      <div className='w-full h-fit p-8 text-left mt-8'>{content}</div>
    </>
  )
}
