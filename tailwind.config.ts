import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Project category colors - ensure these classes are not purged
    'bg-orange-100', 'text-orange-600',
    'bg-green-100', 'text-green-600',
    'bg-purple-100', 'text-purple-600',
    'bg-red-100', 'text-red-600',
    'bg-indigo-100', 'text-indigo-600',
    'bg-pink-100', 'text-pink-600',
    'bg-yellow-100', 'text-yellow-600',
    'bg-teal-100', 'text-teal-600',
    'bg-cyan-100', 'text-cyan-600',
    'bg-emerald-100', 'text-emerald-600',
    'bg-rose-100', 'text-rose-600',
    'bg-blue-100', 'text-blue-600',
    'bg-gray-100', 'text-gray-600',
  ],
  theme: {
    extend: {
      colors: {
        // Puedes personalizar la paleta de colores aquí
      },
      fontFamily: {
        // Puedes personalizar las fuentes aquí
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
}

export default config