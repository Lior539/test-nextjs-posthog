// app/layout.js
import './globals.css'
import { PHProvider, PostHogPageview } from './providers'
import { Suspense } from 'react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<div />}>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body>{children}</body>
      </PHProvider>
    </html>
  )
}