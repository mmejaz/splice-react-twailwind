/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                "sp-blue": "#13224d",
                "sp-orange": "#d27230",
            },
        },
    },
    plugins: [],
};
