/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  typescript: {
    // !! WARN !!
    // 빌드 시 타입 체크를 비활성화하려면 true로 설정
    // 프로덕션에서는 권장하지 않음
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig