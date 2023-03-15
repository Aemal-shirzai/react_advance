import RPClickCounter from "./RPClickCounter";
import RPHoverCounter from "./RPHoverCounter";

const RPCounterApp = () => {
    return (
        <div>
            <h2>React Render Props</h2>
            <p>
                1. Click Counter <br />
                2. Hover Counter
            </p>
            <hr />
            
            <div className="row">
                <div className="col-6">
                    <h3>1. Click Counter</h3>
                    <RPClickCounter info="Counter Component"/>
                </div>
                <div className="col-6">
                    <h3>2. Hover Counter</h3>
                    <RPHoverCounter info="Hover Component" />
                </div>
            </div>
        </div>
    );
}


export default RPCounterApp;