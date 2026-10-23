import nextConfig from 'eslint-config-next'

const config = [
  ...nextConfig,
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**', 'out/**'],
  },
]

export default config
