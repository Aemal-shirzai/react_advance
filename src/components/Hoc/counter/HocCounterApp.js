import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const HocCounterApp = () => {
    return (
        <div>
            <h2>React Higher Order Component (HOC)</h2>
            <p>
                1. Click Counter <br />
                2. Hover Counter
            </p>
            <hr />
            
            <div className="row">
                <div className="col-6">
                    <h3>1. Click Counter</h3>
                    <ClickCounter info="Counter Component"/>
                </div>
                <div className="col-6">
                    <h3>2. Hover Counter</h3>
                    <HoverCounter info="Hover Component" />
                </div>
            </div>
        </div>
    );
}


export default HocCounterApp;