/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ["Poppins", "sans-serif"],
                'anton': ["Anton", "sans-serif"],
                'openSans': ["Open Sans", "sans-serif"]
            },
            colors: {
                'NavBarBackgroundColor': 'rgba(0, 0, 0, 0.08)'
            },
            backgroundImage: {
                'HeaderBackground': "url('/src/Assets/Header/BackgroundHeader.jpg')",
                'HawkQ8HeaderFeaturedBackground': "url('/src/Assets/HeaderFeatured/HawkQ8HeaderFeaturedBackground.jpg')",
            }
        },
    },
    plugins: [],
};