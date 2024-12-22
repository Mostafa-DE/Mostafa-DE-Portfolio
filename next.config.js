const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    compiler: {
        styledComponents: true,
    },
}

module.exports = withMDX(nextConfig)
