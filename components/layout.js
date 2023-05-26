import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Darkmode from './darkmode'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { useLayout } from './useLayout'

const name = 'Diego Barranco'
export const siteTitle = 'Portfolio'

export default function Layout({ children, home }) {
    const { theme, setTheme } = useLayout()

    return (
        <div className={'container mx-auto px-4'}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Porfolio" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            <Darkmode theme={theme} setTheme={setTheme} />

            {!home && (
                <div className={'container'}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    )
}
