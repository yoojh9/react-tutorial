# Movie-app

map()을 사용할 경우 key 속성을 추가한다.
- key는 React.js에서 map 안에서 component들을 render할 때 사용한다.

<br>

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


