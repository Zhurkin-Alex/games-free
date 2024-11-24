/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // Конфигурация для production сборки
  reactStrictMode: true,
  swcMinify: true,
}

export default withBundleAnalyzer(nextConfig)
