/* Shared Tailwind Play CDN config for all Moore Memories pages. Load after the CDN script. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        pine:  { DEFAULT: '#103833', deep: '#0b2a26', soft: '#1c4d46' },
        sand:  { DEFAULT: '#f6f1e8', deep: '#e3d8c4' },
        cream: '#fdfaf4',
        parchment: '#f4efe4',
        ink:   '#1c2925',
        brass: { DEFAULT: '#b5894e', light: '#cda063', dark: '#8a6a35' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
