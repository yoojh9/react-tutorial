# Movie-app

<br>


map()을 사용할 경우 key 속성을 추가한다.
- key는 React.js에서 map 안에서 component들을 render할 때 사용한다.

<br><br>

## 1. React Router

```
$ npm install react-router-dom
```

### BrowserRouter vs HashRouter
- BrowerRouter는 보통의 웹사이트처럼 URL이 생김 (localhost:3030/movie)
- HashRouter는 host URL 뒤에 /#이 붙음 (localhost:3030/#/movie)

### Link
- React Router 대신 a 태그에서 href로 이동시키면 전체 화면이 reload됨. 
- React Router의 Link 컴포넌트를 이용하면 브라우저 새로고침 없이 다른 페이지로 이동시켜 줌.
- 사용자가 느끼기에 빠르게 반응하는 것처럼 보임

<br><br>

## 2. github pages
결과물을 github pages에 업로드 할 수 있게 해 주는 패키지
html, css, javascript를 올리면 웹사이트로 만들어서 배포해 줌

```
    $ npm install gh-pages
```

package.json에 homepage를 추가해주고,

```
  "homepage": "https://{username}.github.io/{repository}"

```

npm script를 아래와 같이 작성

```
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
```

$npm run deploy 실행 시 predeploy가 먼저 실행 됨

결과적으로 https://yoojh9.github.io/react-tutorial/ 주소로 배포 됨.