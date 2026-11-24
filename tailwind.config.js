/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-display)', 'Inter', 'sans-serif'],
        'fantasy': ['var(--font-display)', 'Inter', 'sans-serif'],
        'sans': ['var(--font-sans)', 'Inter', 'sans-serif'],
        'serif': ['var(--font-serif)', 'Georgia', 'serif'],
        'mono': ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'card': {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        'popover': {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        'primary': {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        'secondary': {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        'muted': {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        'accent': {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        'destructive': {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        'success': {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        'warning': {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        'info': {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
        },
        'border': 'var(--border)',
        'input': 'var(--input)',
        'ring': 'var(--ring)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'calc(var(--radius-xl) + 4px)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
}
