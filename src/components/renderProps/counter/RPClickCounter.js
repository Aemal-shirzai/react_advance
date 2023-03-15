import RPCounter from "./RPCounter";

const RPClickCounter = () => {
    return (
        <RPCounter  
            render={ (count, incrementCount) => {
                return (
                    <>
                        <div>Extra Info:</div>
                        <button className="btn btn-outline-primary w-100 p-5" onClick={incrementCount}>Click {count} times</button>
                    </>
                );
            } }
        
        />
    );
}

export default RPClickCounter;