import nextra from 'nextra'
 
const withNextra = nextra({
    defaultShowCopyCode: true
})
 
export default withNextra({
    turbopack:{
        resolveAlias:{
            'next-mdx-import-source-file': './src/mdx-components.jsx'
        }
    },
    redirects: async () => [
        {
            source:'/docs/getting-started',
            destination: '/docs/getting-started/quick-start',
            permanent: true,
        },
        {
            source: '/docs/components',
            destination: '/docs/getting-started/overview',
            permanent: true,
        },
    ],
    images:{
        unoptimized:true,
    }
})