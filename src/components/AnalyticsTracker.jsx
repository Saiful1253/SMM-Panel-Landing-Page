import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageview, event } from '../lib/analytics'

export default function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    pageview(location.pathname + location.search)
  }, [location])

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('[data-track]')
      if (!target) return

      const { action, category, label, value } = target.dataset
      event({
        action: action || 'click',
        category: category || 'engagement',
        label: label || target.textContent?.trim() || target.getAttribute('aria-label') || 'unknown',
        value: value ? Number(value) : undefined,
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
