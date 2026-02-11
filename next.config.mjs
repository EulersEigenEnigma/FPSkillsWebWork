/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Required for GitHub Pages
  output: 'export',

  images: {
    unoptimized: true,
  },

  // REQUIRED because you're hosting under:
  // https://username.github.io/FPSkillsWebWork/
  basePath: '/FPSkillsWebWork',
  assetPrefix: '/FPSkillsWebWork/',
};

export default nextConfig;
