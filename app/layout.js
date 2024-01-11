// app/layout.js

import './globals.css'
import { PHProvider } from './providers'

import dynamic from 'next/dynamic'

const PostHogPageview = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PHProvider>
        <body>
          <PostHogPageview /> 
          {children}
        </body>
      </PHProvider>
    </html>
  )
}