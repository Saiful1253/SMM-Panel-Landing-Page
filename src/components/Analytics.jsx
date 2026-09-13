import { getGAScript } from '../lib/analytics'

export default function Analytics() {
  const gaScript = getGAScript()

  if (!gaScript) return null

  return (
    <div
      dangerouslySetInnerHTML={{ __html: gaScript }}
      aria-hidden="true"
    />
  )
}
