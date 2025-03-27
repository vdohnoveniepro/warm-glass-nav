
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Custom warm color palette
        warmbeige: {
          50: '#FAF6F0',
          100: '#F5EFE6',
          200: '#EBE0D0',
          300: '#DCCDB8',
          400: '#C7B6A0',
          500: '#B5A48B',
          600: '#9A8C76',
          700: '#7C7061',
          800: '#594E42',
          900: '#352E27',
        },
        warmgray: {
          50: '#F9F7F5',
          100: '#F0EDE8',
          200: '#E8E3DD',
          300: '#D4CDC5',
          400: '#BDB6AE',
          500: '#A29A8F',
          600: '#8A8278',
          700: '#6E685E',
          800: '#4B4841',
          900: '#27251F',
        },
        highlight: {
          DEFAULT: '#F0D6B4',
          hover: '#E6C99F',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.7)',
          medium: 'rgba(255, 255, 255, 0.5)',
          dark: 'rgba(0, 0, 0, 0.05)',
        },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(240, 214, 180, 0.6), 0 0 10px rgba(240, 214, 180, 0.4)' 
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(240, 214, 180, 0.8), 0 0 20px rgba(240, 214, 180, 0.6)' 
          },
        },
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c4xm1wAAABwklEQVR4Ae3RR0JyQRSE4QACKogRFXP/g9rdTZ5v1HQ/3vcD1Psk9P4B5PzB8uXLly9fv5QGYv+3y85MbGdrX3sHcvDHXr4AAAQujh/D3Gis9n5HJAsAxyAIIggAAAQBwARAJwBCEgwSQCfgAIQQs+l0xfz83ERn5xcXl9dLzfLm9g4YXx6B8ewfR89vzAcvb+8fH5/nkPn6/mH+Rz9wARU/8d9u4ODZj41FbxMXtwDlv+Hy7uHxKWjZsOOyNVH6GBaByvT1FJSZlXN3FxvwXaSfQAL0ImlmCkAtUJxVp1MCuE37DQAsAuXnYwQIAMCGmkRXKE3XKXEAWFcW5vCp8q/Y5KlzrjzYZB4KjgNALUIq3npNmRdZxrADUF8Lgd4yS4YobUVRhWkmUwKQgnJRXRSVMqm5U8pEhpqUX0wyyQKVdVCt1syDYVHfzWYz02TLBsmDfoFn/2R/P7YoIiG5eLH0lDJ7eSkQ4uJDZ46usHIVeCq646aLWvV6pQoAx+pTa6RW1oArIo0tgLIYYQPkQA70AFzCiAV4XKgA4OQQRiziX1JHaSOAvt7KfuHLly9f/wP0Bdu9L8eD5QvPAAAAAElFTkSuQmCC')",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
