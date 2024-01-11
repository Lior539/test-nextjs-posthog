// app/layout.js
import { PostHogPageview } from './PostHogPageView'
import './globals.css'
import { PHProvider } from './providers'
import { Suspense } from 'react'

// import dynamic from 'next/dynamic'

// const PostHogPageview = dynamic(() => import('./PostHogPageView.js'), { ssr: false })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            
      <PHProvider>
        <Suspense fallback={<div />}>
        <PostHogPageview /> 
      </Suspense>
      

        <body>{children}</body>
      </PHProvider>
    </html>
  )
}