// app/layout.js
import './globals.css'
import { PHProvider, PostHogPageview } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PostHogPageview />
      <PHProvider>
        <body>{children}</body>
      </PHProvider>
    </html>
  )
}