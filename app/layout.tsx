import './globals.css'
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export const metadata = {
  title: 'Modern App Website',
  description: 'Revolutionize Your Experience with Our App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans bg-background">{children}</body>
    </html>
  )
}

