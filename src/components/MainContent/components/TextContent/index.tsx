import React from 'react'
interface TypeWriterProps {
  texts: string[]
  delay: number
}
export const TypeWriter: React.FC<TypeWriterProps> = ({ texts, delay }) => {
  const [displayText, setDisplayText] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [arrayIndex, setArrayIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (arrayIndex < texts.length) {
        if (currentIndex < texts[arrayIndex].length && !isDeleting) {
          setDisplayText((prevText) => prevText + texts[arrayIndex][currentIndex])
          setCurrentIndex(currentIndex + 1)
          clearTimeout(timeout)
        } else if (currentIndex === texts[arrayIndex].length && !isDeleting) {
          setIsDeleting(true)
          clearTimeout(timeout)
        } else if (currentIndex > 0 && isDeleting) {
          setDisplayText((prevText) => prevText.slice(0, -1))
          setCurrentIndex(currentIndex - 1)
          clearTimeout(timeout)
        } else if (currentIndex === 0 && isDeleting) {
          setArrayIndex(arrayIndex + 1)
          setIsDeleting(false)
          clearTimeout(timeout)
        }
      } else if (arrayIndex === texts.length) {
        setArrayIndex(0)
        clearTimeout(timeout)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, arrayIndex, currentIndex, delay, texts])

  return <div className='typewriter'>{displayText}</div>
}
