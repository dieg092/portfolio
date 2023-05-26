import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes' // for Dark mode
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        import('preline')
    }, [])

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
