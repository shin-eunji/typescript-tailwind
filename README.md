# tailwindCSS

tailwindCSS 문서를 읽고 적합한 레이아웃에 tailwindCSS 작업하였습니다.

- typescript
- tailwindCSS

### react & typescript 
```git
npx create-react-app 1_tailwindcss-example --template typescript
```

## tailwind CSS
tailwind.config.js file 추가.
```git
npm i -D tailwindcss
npx tailwindcss init
```

tailwindcss CLI 빌드 프로세스 시작
```git
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```


Tailwind CSS의 플러그인 사용하기, tailwind-scrollbar-hide
```git
npm i tailwind-scrollbar-hide
```
```javascript
// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  // 이 부분을 추가해줍니다!
  plugins: [require("tailwind-scrollbar-hide")],
};
```

## 느낀점
styled-components 라이브러리 보다 편하고 간결하다.
복잡성도 없으며, 한 눈에 보기는 쉽고 모듈화 시켜 작업도를 향상시킬 수 있다.
처음에는 기존 css 문법에 비해 명명이 다르기 때문에 혼돈되지만, 숙달되면 오히려 더 편할 수 있다.
Grid와 action에 좋은 styling 중 하나라고 생각한다.