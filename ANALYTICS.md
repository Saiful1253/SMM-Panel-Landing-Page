# Analytics Configuration

This project supports two analytics providers. Choose one or use both.

## Option 1: Google Analytics 4 (GA4)

1. Create a GA4 property at https://analytics.google.com
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create `.env` file in the project root:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. The `Analytics` component (`src/lib/analytics.js`) will automatically load GA4

## Option 2: Plausible Analytics (Privacy-Friendly)

1. Sign up at https://plausible.io
2. Add your domain `smspanelbd.com`
3. Create `.env` file:

```env
VITE_PLAUSIBLE_DOMAIN=smspanelbd.com
```

4. Plausible script loads automatically via `src/components/PlausibleAnalytics.jsx`

## Option 3: Both

You can use both simultaneously. The `AnalyticsTracker` component will send page views to GA4 and Plausible will track automatically.

## Custom Event Tracking

Track custom events using the `data-track` attribute:

```jsx
<button
  data-track
  data-action="signup_click"
  data-category="conversion"
  data-label="header_signup"
>
  Sign Up
</button>
```

Or use the `event` helper:

```jsx
import { event } from '../lib/analytics'

event({
  action: 'form_submit',
  category: 'lead',
  label: 'contact_form',
  value: 1,
})
```

## Environment Variables

Create a `.env` file (do NOT commit this to git):

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=smspanelbd.com
```

Add `.env` to `.gitignore` if not already present.
