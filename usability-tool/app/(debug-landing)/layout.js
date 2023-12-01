import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'debug',
  description: 'this is the debug links',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="body_Builder">{children}</body>
    </html>
  )
}
