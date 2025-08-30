import './globals.css'

export const metadata = {
  title: 'LDIA VAN — Location & Guide',
  description: 'Site vitrine + avis + disponibilités',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header style={{padding:"20px", borderBottom:"1px solid gray"}}>
          <h1>LDIA VAN</h1>
        </header>
        <main style={{padding:"20px"}}>
          {children}
        </main>
      </body>
    </html>
  )
}
