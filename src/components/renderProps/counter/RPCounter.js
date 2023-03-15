import { useState } from "react";

const RPCounter = ({ render, by=1 }) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(prev => prev + by);
    }


    return render(count, incrementCount);
}


export default RPCounter;