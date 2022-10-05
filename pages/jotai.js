import {atom, useAtom} from "jotai";

const counterAtom = atom(0);
const doubleCounterAtom = atom((get => get(counterAtom) * 2));

const Counter = () => {
    const [counter, setCounter] = useAtom(counterAtom);

    return (
        <div>
            <button onClick={() => setCounter(c => c - 1)}>-</button>
            <div>{counter}</div>
            <button onClick={() => setCounter(c => c + 1)}>+</button>
        </div>
    )
}

const CurrentCounter = () => {
    const [counter] = useAtom(counterAtom);

    return <div>{`현재 카운터 숫자는 ${counter} 입니다.`}</div>
}

const DoubleCurrentCounter = () => {
    const [doubleCounter] = useAtom(doubleCounterAtom);

    return <div>{`현재 카운터 숫자는 ${doubleCounter} 입니다.`}</div>
}

const JotaiPage = () => {
    return (
        <div>
            <Counter />
            <CurrentCounter />
            <DoubleCurrentCounter />
        </div>
    );
}

export default JotaiPage;