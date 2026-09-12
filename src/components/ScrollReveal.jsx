import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '', delay = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(node)

    return () => {
      observer.unobserve(node)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${delay}`}
    >
      {children}
    </div>
  )
}
