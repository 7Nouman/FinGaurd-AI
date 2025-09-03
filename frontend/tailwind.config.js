/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-security': 'var(--gradient-security)',
        'gradient-risk-low': 'var(--gradient-risk-low)',
        'gradient-risk-medium': 'var(--gradient-risk-medium)',
        'gradient-risk-high': 'var(--gradient-risk-high)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        success: { DEFAULT: 'hsl(var(--success))', foreground: 'hsl(var(--success-foreground))' },
        warning: { DEFAULT: 'hsl(var(--warning))', foreground: 'hsl(var(--warning-foreground))' },
        danger: { DEFAULT: 'hsl(var(--danger))', foreground: 'hsl(var(--danger-foreground))' },
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))'
      }
    },
  },
  plugins: [],
}
