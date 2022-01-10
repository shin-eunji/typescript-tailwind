module.exports = {
<<<<<<< HEAD
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
=======
  mode: 'jit', //
  purge: ['./src/**/*.{js,ts,jsx,tsx}'], // purge 옵션을 통해서 production build를 할 때 tailwind가 /page 와 /components 의 불필요한 스타일을 트리 쉐이킹할 수 있도록 경로를 명시 해줍니다. 파일 크기를 최소화 할 수 있습니다.
  darkMode: 'class',
  theme: {
    extend: {
      // keyframes: {
      //   slider: {
      //     '0%': {
      //       transform: 'translateX(0px)'
      //     },
      //     '100%': {
      //       transform: 'translateX(-2000px)'
      //     }
      //   },
      // },
      // animation: {
      //   slider: 'slider 20s linear infinite'
      // }
    },
    backgroundImage: {
      'logo': "url('./images/unsplash.png')",
      'logo-dark': "url('./images/unsplash-dark.png')",
    },
    screens: {
      sm: '320px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
    },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
  },
  variants: {
    extend: {} // 지정된 속성에만 사용 가능함! 사용할 속성: ['클래스명']
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
>>>>>>> ch1
