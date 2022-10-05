import {proxy, useSnapshot} from "valtio";

const counterState = proxy({
    counter: 0
})

const Counter = () => {
    const counter = useSnapshot(counterState);

    return (
        <div>
            <button onClick={() => {--counterState.counter}}>-</button>
            <div>{counter.counter}</div>
            <button onClick={() => {++counterState.counter}}>+</button>
        </div>
    )
}

const CurrentCounter = () => {
    const counter = useSnapshot(counterState);

    return <div>{`현재 카운터 숫자는 ${counter.counter} 입니다.`}</div>
}

const DoubleCurrentCounter = () => {
    const counter = useSnapshot(counterState);

    return <div>{`현재 카운터 숫자는 ${counter.counter * 2} 입니다.`}</div>
}

const ValtioSnapshotChecker = () => {
    const counter1 = useSnapshot(counterState);
    console.log(counter1);
    const counter2 = useSnapshot(counterState);
    console.log(counter1, counter2);
    counterState.counter += 1;
    const counter3 = useSnapshot(counterState);
    console.log(counter1, counter2, counter3);
}

const ValtioPage = () => {
    return (
        <div>
            <Counter />
            <CurrentCounter />
            <DoubleCurrentCounter />

            {/*<ValtioSnapshotChecker />*/}
        </div>
    );
}

export default ValtioPage;