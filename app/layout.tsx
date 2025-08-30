import './globals.css'

export const metadata = {
  title: 'LDIA VAN — Location & Guide',
  description: 'Site vitrine + avis + disponibilités',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{margin:0, background:'#0b0f14', color:'#e6f0ff', fontFamily:'system-ui, sans-serif'}}>
        <header style={{padding:'16px 20px', borderBottom:'1px solid #223044'}}>
          <h1 style={{margin:0, fontSize:18}}>LDIA VAN</h1>
        </header>
        <main style={{maxWidth:1000, margin:'0 auto', padding:20}}>
          {children}
        </main>
        <footer style={{color:'#9fb1cc', fontSize:12, padding:20, borderTop:'1px solid #223044'}}>
          © {new Date().getFullYear()} LDIA COM
        </footer>
      </body>
    </html>
  )
}
