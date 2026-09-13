const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'smspanelbd.com'

export default function PlausibleAnalytics() {
  if (!PLAUSIBLE_DOMAIN) return null

  return (
    <script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://analytics.plygrnd.org/js/script.js"
      data-theme="light"
    />
  )
}
