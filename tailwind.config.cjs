/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // backgroundImage: {
        //     'login-image':"url('../src/assets/login/login-background.jpg')"
        // },
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
            },
            gridTemplateRows: {
                'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
            },
        },
    },
    plugins: [],
}