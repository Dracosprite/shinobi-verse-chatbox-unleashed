
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Naruto theme colors
				naruto: {
					orange: '#FF7800',
					red: '#EA384C',
					black: '#1A1F2C',
					scroll: '#F2E8D5',
					leaf: '#4CAF50',
					sand: '#E6C069',
					cloud: '#F0F0F0',
					mist: '#B3E0F2',
					stone: '#707070',
					sound: '#9B87F5',
					akatsuki: '#DF3A4A'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'jutsu-appear': {
					'0%': { transform: 'scale(0.5)', opacity: '0' },
					'70%': { transform: 'scale(1.05)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'kunai-throw': {
					'0%': { transform: 'translateX(-20px) rotate(-45deg)', opacity: '0' },
					'70%': { transform: 'translateX(5px) rotate(15deg)', opacity: '1' },
					'100%': { transform: 'translateX(0) rotate(0)', opacity: '1' }
				},
				'scroll-unroll': {
					'0%': { maxHeight: '0', opacity: '0' },
					'100%': { maxHeight: '500px', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'jutsu-appear': 'jutsu-appear 0.3s ease-out',
				'kunai-throw': 'kunai-throw 0.3s ease-out',
				'scroll-unroll': 'scroll-unroll 0.5s ease-out'
			},
			backgroundImage: {
				'scroll-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZjJlOGQ1IiBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIgMmgzNnYzNkgyVjJ6IiBmaWxsPSIjZWRkZWIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')",
				'leaf-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDMwKSI+PHBhdGggZD0iTTAgLTIwQy0xMSAtMjAgLTIwIC0xMSAtMjAgMEMtMjAgMTEgLTExIDIwIDAgMjBDMTEgMjAgMjAgMTEgMjAgMEMyMCAtMTEgMTEgLTIwIDAgLTIwTTAgLTE0QzggLTE0IDE0IC04IDE0IDBDMTQgOCA4IDE0IDAgMTRDLTggMTQgLTE0IDggLTE0IDBDLTE0IC04IC04IC0xNCAwIC0xNCIgZmlsbD0icmdiYSg3NiwxNzUsODAsMC4xKSIvPjxwYXRoIGQ9Ik0wIC0xNEMtOCAtMTQgLTE0IC04IC0xNCAwQy0xNCA4IC04IDE0IDAgMTRDOCAxNCAxNCA4IDE0IDBDMTQgLTggOCAtMTQgMCAtMTQiIHN0cm9rZT0icmdiYSg3NiwxNzUsODAsMC4yKSIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
