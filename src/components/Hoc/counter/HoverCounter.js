import withCounter from "./withCounter";

const HoverCounter = ({ count, incrementCount, info }) => {
    return (
        <>
            <div>Extra Info: { info }</div>
            <div className="bg-dark text-white rounded p-5 text-center" onMouseEnter={incrementCount}>
                Hover {count} times
            </div>
        </>
    );
}

export default withCounter(HoverCounter, 5);