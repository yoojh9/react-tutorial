import Button from './Button';
import styles from './App.module.css'
import { useState, useEffect } from 'react';

const App = () => {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(false);

    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    const onShowingButtonClick = () => setShowing((prev) => !prev)

    console.log('i run all the time');

    // 코드가 딱 한번만 실행하게 해 줌. 두번째 배열 인자에 아무값도 넣지 않으므로 한번만 실행됨
    useEffect(() => console.log('I run only once'), [])

    // keyword state가 변할 때만 호출하고 싶다면 두번째 argument 배열에 keyword를 적어줌
    useEffect(() => {
        console.log("I run when 'keyword' changes.")
    }, [keyword])

    useEffect(() => {
        console.log("I run when 'counter' changes.")
    }, [counter])
    useEffect(() => {
        console.log('I run when keyword & counter changes')
    }, [keyword, counter])

    const Hello = () => {
        const hiFn = () => {
            console.log("Hi :)");
            return byeFn  // 컴포넌트가 destroy 될 때 실행 됨
        }

        const byeFn = () => console.log('bye :(')

        useEffect(hiFn, []);
        useEffect(() => {
            console.log('Hello');
            return () => console.log('Good Bye')
        }, [])
        // 위와 같은 코드
        // useEffect(() => {
        //     console.log("created :)");
        //     return () => console.log("destory :(")  // component가 destroy 될 때 실행될 함수를 리턴해야 함
        // }, []);
        return <h1>Hello</h1>
    }

    return (
        <div>
            {showing ? <Hello /> : null}
            <input value={keyword} type="text" placeholder="Search here..." onChange={onChange} />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
            <button onClick={onShowingButtonClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;