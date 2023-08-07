import React from 'react'
interface TypeWriterProps {
  text: string
  delay: number
}
export const TypeWriter: React.FC<TypeWriterProps> = ({ text, delay }) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length && !isDeleting) {
        setDisplayText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else if (currentIndex === text.length && !isDeleting) {
        setIsDeleting(true)
        clearTimeout(timeout)
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1))
        clearTimeout(timeout)
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex(0)
        clearTimeout(timeout)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, displayText, isDeleting, delay])

  return <div className='typewriter'>{displayText}</div>
}
