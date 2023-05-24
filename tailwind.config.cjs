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
                'NavBarBackgroundColor': 'rgba(0, 0, 0, 0.08)',
                'LaunchBgTextColor': 'rgba(255, 255, 255, 0.4)',
                'LaunchBoxBgColor': 'rgba(25, 65, 105, 0.5)',
                'NewsCTAColor': '#313131',
                'NewsBorderCTAColor': '#C4C4C4',
                'FooterBorderColor': '#FF9568',
            },
            backgroundImage: {
                'HeaderBackground': "url('/src/Assets/Header/BackgroundHeader.jpg')",
                'HawkQ8HeaderFeaturedBackground': "url('/src/Assets/HeaderFeatured/HawkQ8HeaderFeaturedBackground.jpg')",
                'LaunchBg': "url('/src/Assets/Launch/LaunchBg.jpg')",
            }
        },
    },
    plugins: [],
};