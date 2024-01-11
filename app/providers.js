// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init("phc_Is2364QKW0QKHbXWVtgh8Yugx8xAvdfL71JmBaKD8mG", {
    api_host: "https://app.posthog.com"
  })
}

export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}