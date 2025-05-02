import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Command Line Guide',
  description: 'Interactive reference for Linux and Windows commands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="py-6 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>Command Line Guide © {new Date().getFullYear()} - Your comprehensive CLI reference</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
