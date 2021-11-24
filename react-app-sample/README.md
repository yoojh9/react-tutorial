# React Sample App

- create-react-app을 이용하면 React JS 어플리케이션을 만드는 데 훨씬 쉬워질 수 있음
- create-react-app은 많은 스크립트 설정과 사전 설정을 미리 준비해 줌
- 노마드 코더 ReactJS로 영화 웹서비스 만들기 강의 시청하며 학습한 코드(https://nomadcoders.co/react-for-beginners)


### 1. prop-type 패키지 설치
- $npm install prop-types

<br>

### 2. useEffect()
- state가 바뀔 때 마다 컴포넌트는 re-render 되는데, 처음 render 됐을 경우 딱 한번만 코드를 실행하고 싶다면 useEffect()를 사용한다.
- useEffect(effect: EffectCallback, deps?:DependencyList);
    - 첫번째 argument에는 딱 한번만 실행시키고 싶은 콜백함수를 넣는다
- ex. api 호출