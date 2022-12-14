/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
   experimental: {
    appDir:true,
   },
   images: {
    domains: ['mir-s3-cdn-cf.behance.net','links.papareact.com','cdm.sanity.io'],
   },
}
