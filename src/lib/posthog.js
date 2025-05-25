import posthog from 'posthog-js'

// Для настройки PostHog добавьте в .env.local:
// NEXT_PUBLIC_POSTHOG_KEY=phc_your_posthog_key_here
// NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_test_key', {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') console.log('PostHog loaded')
      }
    })
  }
}

export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && posthog) {
    console.log('📊 PostHog Event:', eventName, properties)
    posthog.capture(eventName, properties)
  }
}

export default posthog
