
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'LDIA VAN — Location & Guide',
  description: 'Site vitrine + avis + disponibilités',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <h1>LDIA VAN</h1>
          <span className="badge">gratuit (Vercel + Supabase)</span>
          <nav className="nav">
            <Link href="/">Accueil</Link>
            <Link href="/availability">Disponibilités</Link>
            <Link href="/reviews">Avis</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <div className="container">{children}</div>
        <footer>LDIA COM • © {new Date().getFullYear()}</footer>
      </body>
    </html>
  )
}
