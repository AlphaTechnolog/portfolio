/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      keyframes: {
        'cursor-beam': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      animation: {
        'cursor-beam': 'cursor-beam 1s ease-in-out infinite'
      },
      fontFamily: {
        'display': ['Inter', 'ui-sans-serif', 'system-ui'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Inter', 'ui-sans-serif', 'system-ui'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'background': '#1A1A29',
        'dark-background': '#181824',
        'foreground': '#F5F5F5',
        'primary': '#7562E0'
      }
    },
	},
	plugins: [],
}
