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
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`} role="status" aria-live="polite" aria-busy="true">
      <div className="loader" aria-hidden="true"></div>
      <div className="loader-text">LOADING</div>
      <span className="sr-only">Loading, please wait</span>
    </div>
  )
}
