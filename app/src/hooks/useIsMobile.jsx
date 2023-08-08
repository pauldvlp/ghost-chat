import { useEffect, useState } from 'react'

const mediaQueryString = '(min-width: 640px)'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(mediaQueryString).matches
  )

  const handleResize = () =>
    setIsMobile(window.matchMedia(mediaQueryString).matches)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}

export default useIsMobile
