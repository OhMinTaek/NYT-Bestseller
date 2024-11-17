/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['storage.googleapis.com'], // NYT API 이미지 도메인
  },
};

module.exports = nextConfig;