import withCounter from "./withCounter";

const ClickCounter = ({ count, incrementCount, info }) => {
    return (
        <>
            <div>Extra Info: { info }</div>
            <button className="btn btn-outline-primary w-100 p-5" onClick={incrementCount}>Click {count} times</button>
        </>
    );
}

export default withCounter(ClickCounter);