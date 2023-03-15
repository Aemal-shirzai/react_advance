import { useState } from "react";

const withCounter = (WrappedComponent, by=1) => {
    return (props) => {
        const [count, setCount] = useState(0)

        const incrementCount = () => {
            setCount(prev => prev + by);
        } 

        return <WrappedComponent count={count} incrementCount={incrementCount} {...props} />;
    };
}  


export default withCounter;