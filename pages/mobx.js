import {makeAutoObservable} from "mobx";
import {observer, Provider} from "mobx-react";

class Counter {
    counter = 0;

    constructor() {
        console.log(this);
        makeAutoObservable(this);
    }

    increase = () => {
        this.counter += 1;
    }

    decrease = () => {
        this.counter -= 1;
    }
}

const CounterC = observer(({counter}) => {
    return (
        <div>
            <button onClick={counter.decrease}>-</button>
            <div>{counter.counter}</div>
            <button onClick={counter.increase}>+</button>
        </div>
    )
})

const CurrentCounter = observer(({counter}) => {
    return <div>{`현재 카운터 숫자는 ${counter.counter} 입니다.`}</div>
})

const DoubleCurrentCounter = observer(({counter}) => {
    return <div>{`현재 카운터 숫자는 ${counter.counter * 2} 입니다.`}</div>
})

const MobxPage = () => {
    const myCounter = new Counter();

    return (
        <Provider>
            <CounterC counter={myCounter} />
            <CurrentCounter counter={myCounter} />
            <DoubleCurrentCounter counter={myCounter} />
        </Provider>
    );
}

export default MobxPage;