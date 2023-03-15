import RPCounter from "./RPCounter";

const RPHoverCounter = () => {
    return (

        <RPCounter
            by={5}
            render={(count, incrementCount) => {
                return(
                    <>
                        <div>Extra Info</div>
                        <div className="bg-dark text-white rounded p-5 text-center" onMouseEnter={incrementCount}>
                            Hover { count } times
                        </div>
                    </>
                )
            }}
        />
    );
}

export default RPHoverCounter;