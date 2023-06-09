import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do List',
  description: 'Aplicação para criação de listagem de tarefas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-gray-600 text-white h-screen ${inter.className}`}>{children}</body>
    </html>
  )
}
