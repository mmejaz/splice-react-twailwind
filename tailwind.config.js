/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                "sp-blue": "#13224d",
                "sp-orange": "#d27230",
                "sp-dark": "#01150c",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
