# nmsm-design-system-sample
놀멍쉬멍 디자인 시스템 샘플 프로젝트
1. 환경
2. 프로젝트 초기화
3. github packages로 배포
4. 다른 프로젝트에서 사용하기

## 프로젝트 환경
1. yarn / npm : 패키지 매니저 + npm 배포
2. parcel : webpack 대체 경량화 번들러
3. babel : react 구동에 필요
4. stitches.js : css in js
5. typescript : 코드 가독성 증가를 위해 type 고려하면서 코딩
6. github packages : npm 배포를 npm 저장소가 아닌 github private repository에 가능하게 도와줌(용량 제한)

## 프로젝트 초기화
1. parcel 글로벌 설치(첫 설치 시에만)
```
yarn gloabl add parcel-bundler
```
![image](https://user-images.githubusercontent.com/39260956/139527879-fa961743-3528-4595-a3e2-17ce4841310c.png)

2. github에서 저장소 생성 후 로컬에 git clone. 

```
npm init -y
```

![image](https://user-images.githubusercontent.com/39260956/139527973-b876fdab-0ded-4600-98aa-a7462d96cb4d.png)

3. babel 설치 후 설정 추가
> npm i --dev @babel/preset-env @babel/preset-react
: [.babelrc] 파일 생성 후 수정

```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

4. typescript 글로벌 설치(첫 설치 시에만) 후 
![image](https://user-images.githubusercontent.com/39260956/139528051-391439a7-0b1b-4b9b-9af5-9a41e7b377dd.png)

> tsc --init

: 생성된 .tsconfig에서 해당부분 찾아서 react로 수정

![image](https://user-images.githubusercontent.com/39260956/139528084-b84ae84a-6646-49a4-aac4-96c5a507fdb5.png)

5. react, typescript용 react 추가
> npm i react react-dom
> npm i --also=dev @types/react @types/react-dom

6. [package.json] 파일에 시작 스크립트 추가
>  "start": "parcel ./public/index.html -d build"

7. [.gitignore] 생성 후 대상 경로 및 파일 수정
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/dist
/.cache
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

8. public/index.html, src/index.tsx, src/App.tsx 생성 후 기본 코드 작성
```
// public/index.html
<html>
<body>
  <div id="root"></div>
  <script src="../src/index.tsx"></script>
</body>
</html>
```

```
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);
```

```
// src/App.tsx
import React from "react";

function App() {
  const msg: string = "typescript";
  return (
    <div>
      Hello World from {msg}
      <p />
    </div>
  );
}

export default App;
```

9. 다음 명령어로 react 테스트
```
npm run-script start
```

10. stitches.js 추가
```
npm i @stitches/react
```

11. src 경로에 [stitches.config.ts] 생성 후 다음 내용 추가
```
export const { styled, css, getCssText } = createStitches({
      media: {
         mobile_m: "(min-width: 375px)",
         mobile_l: "(min-width: 425px)",
         tablet: "(min-width: 768px)",
         pc: "(min-width: 1024px)",
      },
      theme: {
         colors: {
            black: "#000000",
            white: "#FFFFFF",
            red: "#ff0000",
            yellow: "#ffff00",
            green: "#008000",
         },
      },
      });
```

12. 사용 시 다음 코드로 import
```
import { styled } from "path-to/stitches.config"
```

## github package로 배포하기
1. 배포하려는 컴포넌트를 [index.tsx]에서 재정의
```
export { default as DefaultButton } from "./components/buttons/DefaultButton";
export { default as InputGroup } from "./components/inputs/InputGroup";
```

2. [.npmignore]에 배포때 제외할 디렉토리, 파일을 추가
```

```

3. [.tsconfig] 추가 설정
```
    {
  "compilerOptions": {  
    "target": "es5",  
    "jsx": "react",  
    "module": "commonjs",    
    "esModuleInterop": true,     
    "forceConsistentCasingInFileNames": true,         
    "strict": true,  
    "skipLibCheck": true,
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["./src/**/*.tsx", "./src/**/*.ts"],
  "exclude": ["node_modules"]
   }

```
- "declaration": 자동완성을 위한 .d.ts 파일 생성
- "outDir": 컴파일 결과 출력 출력 경로
- "rootDir": root 경로
- "include": 컴파일 대상 경로
- "exclude": 컴파일 제외 경로

3. [.npmrc]에 github에서 생성한 personal access token 입력

: https://github.com/settings/tokens/new 에서 write:packages로 발급(현재는 조직 단위 토큰이 없어서 조직에 접근권한이 있는 사용자의 PAT로 대체해야한다고함)
```
//npm.pkg.github.com/:_authToken=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
```

4. [package.json] 수정
```
- name : @조직명/패키지명 https://github.com/nolmungshemung/nmsm-design-system-sample 에서 nolmungshemung 부분
- main : 트랜스파일결과 메인파일(build/index.js)
- types : 자동완성용 d.ts파일(build/index.d.ts)
- publishConfig : {
         "registry": "https://npm.pkg.github.com/"
      }
- version : 배포시마다 변경해줘야함
```

5. [package.json]에서 scripts 추가
```
"build": "tsc",
"prepare": "npm run-script build"
```
6. 배포
```
npm publish
```

## 다른 프로젝트에서 사용하기
1. [.npmrc] 생성해서 내용 추가 : //npm.pkg.github.com/:_authToken=해당 조직 or 저장소에 접근 가능한 유저의 PAT 값
```
   조직명 or 유저명:registry=https://npm.pkg.github.com/
   -> 해당 조직 or 유저의 저장소는 github가서 찾으라는 우회경로 
```

2. 패키지 가져오기
```
npm install @nolmungshemung/nmsm-design-system-sample
```

3. 사용하려는 컴포넌트에선 다음과 같이 사용
```
   import {
  DefaultButton,
  InputGroup,
} from "@nolmungshemung/nmsm-design-system-sample";
```
