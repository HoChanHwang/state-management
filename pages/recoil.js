import {atom, RecoilRoot, selector, useRecoilState, useRecoilValue} from "recoil";

const counterState = atom({
    key: 'counterState',
    default: 0
});

const doubleCounterState = selector({
    key: 'doubleCounterState',
    get: ({get}) => {
        const counter = get(counterState);

        return counter * 2;
    }
});

const Counter = () => {
    const [counter, setCounter] = useRecoilState(counterState);

    return (
        <div>
            <button onClick={() => setCounter(c => c - 1)}>-</button>
            <div>{counter}</div>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
        </div>
    )
}

const CurrentCounter = () => {
    const counter = useRecoilValue(counterState);

    return <div>{`현재 카운터 숫자는 ${counter} 입니다.`}</div>
}

const DoubleCurrentCounter = () => {
    const doubleCounter = useRecoilValue(doubleCounterState);

    return <div>{`현재 카운터 숫자는 ${doubleCounter} 입니다.`}</div>
}

const RecoilPage = () => {
    return (
        <RecoilRoot>
            <Counter />
            <CurrentCounter />
            <DoubleCurrentCounter />
        </RecoilRoot>
    );
}

export default RecoilPage;