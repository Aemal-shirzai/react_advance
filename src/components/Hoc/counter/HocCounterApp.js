import HocClickCounter from "./HocClickCounter";
import HocHoverCounter from "./HocHoverCounter";

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
                    <HocClickCounter info="Counter Component"/>
                </div>
                <div className="col-6">
                    <h3>2. Hover Counter</h3>
                    <HocHoverCounter info="Hover Component" />
                </div>
            </div>
        </div>
    );
}


export default HocCounterApp;