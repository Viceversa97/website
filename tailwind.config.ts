import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#0d3d61', ink: '#102038', sand: '#cfa977' }, boxShadow: { card: '0 4px 14px rgba(15, 35, 54, .12)' } } }, plugins: [] } satisfies Config;
