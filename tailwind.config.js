// nơi đăng ký những gì mình tạo ra và không có sẵn
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
        Open: '"Open Sans"',
        Inter: "Inter",
        Tinos: "Tinos",
      },
      colors: {
        first: "#F7C334",
        second: "#2F2A2A",
        third: "#FFFFFF",
        card: "#3C3636",
        fouth: "rgba(0, 0, 0, 0.534)",
        backopacity: "rgba(0, 0, 0, 0.85);",
      },
      screens: {
        mobile: "390px",
        tablet: "966px",
        laptop: "1271px",
        laptop_max: "1383px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero image.png')",
        "banner-mini": "url('/src/assets/images/BannerMini.png')",
        "banner-slider": "url('/src/assets/images/visitorsSlider-img.png')",
        "banner-bottom": "url('/src/assets/images/banner-end.png')",
      },
      boxShadow: {
        card: "10px 10px 40px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
