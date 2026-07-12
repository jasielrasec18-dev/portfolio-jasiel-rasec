export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neonCyan: '#00ffea',
        neonMagenta: '#ff2efc',
        neonPurple: '#cc66ff',
      },
      fontFamily: {
        display: ['Orbitron', 'Montserrat', 'Arial', 'sans-serif'],
        sans: ['Orbitron', 'Space Grotesk', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
