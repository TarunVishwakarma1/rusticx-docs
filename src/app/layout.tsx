import { Layout } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import PageNavbar from '../components/navbar.tsx'
import PageFooter from '../components/footer.tsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Make database easy with Rusticx',
  // metadataBase: new URL('https://nextra.site'),
  keywords: [
    'Rust',
    'Cargo',
    'Rusticx',
    'Rusticx Derive',
    'Macro',
    'ORM',
    'Database',
    'Rust Postgres',
    'Rust ORM',
  ],
  generator: 'Next.js',
  applicationName: 'Rusticx',
  appleWebApp: {
    title: 'Rusticx'
  },
  title: {
    default: 'Rusticx – Rust ORM',
    template: '%s | Rusticx'
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Rusticx',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  // twitter: {
  //   site: 'https://nextra.site'
  // },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './'
  }
}

export default async function RootLayout({ children }:Readonly<{children:React.ReactNode}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
      >
      </Head>
      <body>
        <Layout
          navbar={<PageNavbar/>}
          pageMap={await getPageMap()}
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 2, autoCollapse: true }}
          docsRepositoryBase="https://github.com/TarunVishwakarma1/rusticx-docs/blob/main"
          footer={<PageFooter/>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}