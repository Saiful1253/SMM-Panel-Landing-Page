import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function parseNumber(str) {
  const numeric = str.replace(/[^0-9]/g, '')
  return parseInt(numeric, 10) || 0
}

function formatNumber(num, original) {
  const hasPrefix = original.startsWith('#')
  const hasCommas = original.includes(',')
  
  if (hasPrefix && num === 1) return '#1'
  
  let formatted = num.toString()
  if (hasCommas || num >= 1000) {
    formatted = num.toLocaleString('en-US')
  }
  
  return formatted
}

export default function AnimatedCounter({ children, duration = 2000 }) {
  const [current, setCurrent] = useState('0')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  const targetNumber = parseNumber(typeof children === 'string' ? children : '0')
  const originalString = typeof children === 'string' ? children : '0'

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
          observer.unobserve(node)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    let animationId = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)
      const currentNumber = Math.round(easedProgress * targetNumber)
      
      setCurrent(formatNumber(currentNumber, originalString))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [isVisible, targetNumber, duration, originalString])

  return <span ref={ref}>{current}</span>
}
