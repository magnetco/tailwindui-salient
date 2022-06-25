import 'focus-visible'
import Link from 'next/link'
import '@/styles/tailwind.css'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <Component {...pageProps} />
      </SignedOut>
    </ClerkProvider>
  )
}
