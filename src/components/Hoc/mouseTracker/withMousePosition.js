import { useEffect, useState } from "react"

const withMousePosition = (WrappedComponent) => {
    return (props) => {

        const [position, setPosition] = useState(() => {
            return {
                x: 0,
                y: 0
            }
        });
        
        useEffect(() => {

            const setMousePosition = (e) => {
                console.log(">>> Aemal");
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                })
            }

            window.addEventListener('mousemove', setMousePosition);

            return () => {
                window.removeEventListener('mousemove', setMousePosition);
            }

        }, []);

        return <WrappedComponent position={position} />
    }
}

export default withMousePosition