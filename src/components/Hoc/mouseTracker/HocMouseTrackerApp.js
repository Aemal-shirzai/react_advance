import withMousePosition from "./withMousePosition";


const PanelMouseLogger = ({ position }) => {
    return (
        <>
            <p>Mouse Position</p>
            <span>x: { position.x }</span> __________ <span>y: { position.y }</span>
        </>
    )
}
const PointMouseLogger = ({ position }) => {
    return (
        <>
            <p>
                ({position.x}, {position.y})
            </p>
        </>
    )
}


const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)


const HocMouseTrackerApp = () => {
    return (
        <div>
            <h2>React Higher Order Component (HOC)</h2>
            <p>
                1. Mouse Tracker x and y <br />
                2. Mouse Tracker (x, y) points.
            </p>
            <hr />
            <div>
                <h3>1. Panel Mouse Logger</h3>
                <PanelMouseTracker />
            </div>
            <hr />
            <div>
                <h3>2. Point Mouse Logger</h3>
                <PointMouseTracker />
            </div>
        </div>
    );
}

export default HocMouseTrackerApp;