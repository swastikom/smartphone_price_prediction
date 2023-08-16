import '@/styles/globals.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Phone Suggest',
  description: 'Thinking of buying phone! Get the best price and best brand suggestion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
