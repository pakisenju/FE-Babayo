/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#337CCF',
					secondary: '#191D88',
					accent: '#1450A3',
					neutral: '#3d4451',
					'base-100': '#ffffff',
					info: '#5b7bdc',
					success: '#24ae7b',
					warning: '#a26511',
					error: '#f31b46',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
