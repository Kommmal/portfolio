/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { transform: {
      '3d': 'rotateY(15deg) rotateX(15deg)', // Apply a 3D rotation on hover
    },},
    boxShadow: {
      lg: '0px 4px 24px rgba(23, 92, 230, 0.15)',
    },
    primary: '#1A202C', // Primary color
    secondary: '#2D3748', // Secondary color
    'primary-light': '#CBD5E0', // Lighter primary color
  },
  plugins: [],
}
