import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Accordion from '../components/accordion'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import { GroundControlProvider } from '@groundcontrolsh/react'

const items = [
    {
        title: 'Item 1',
        description: 'Description item 1',
    },
    {
        title: 'Item 2',
        description: 'Description item 2',
    },
    {
        title: 'Item 3',
        description: 'Description item 3',
    },
]

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData,
        },
    }
}


export default function Home({ allPostsData }) {
    return (
        <GroundControlProvider
            projectId="P0U9V4K4H6FD5KDE"
            apiKey="gcp_qyDBkTq4x9qI3ZZ1o0jxENzqqX5Ss80TMVkd"
            cache={1}
        >
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <Accordion items={items} type={'arrow'} />
                <section className={utilStyles.headingMd}>
                    <p>[Your Self Introduction]</p>
                    <p>
                        (This is a sample website - you’ll be building a site
                        like this on{' '}
                        <a href="https://nextjs.org/learn">
                            our Next.js tutorial
                        </a>
                        .)
                    </p>
                </section>
                <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                >
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                <Link href={`/posts/${id}`}>{title}</Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date} />
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>
        </GroundControlProvider>
    )
}
