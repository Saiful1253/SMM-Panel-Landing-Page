import { useEffect, useRef, useState } from 'react'

export default function Loading() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
    }, 600)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      <div className="loader"></div>
      <div className="loader-text">LOADING</div>
    </div>
  )
}
