import React, { useEffect, useState } from "react";


const JsxSlideShowCard = (props) => {

    const [current, setCurrent] = useState(0)
    const [bullets, setBullets] = useState(Array());


    useEffect(() => {
        setBullets(prev => {
            return Array(props.children.length).fill('○').map((e, i) => {
                return i == current ? '⬤' : e
            })
        })
    }, [current]);

    useEffect(() => {
        let interval = setInterval(showNext, 1500);
        return () => {
            clearInterval(interval);
        }  
    }, [])
    
    const showNext = () => {
        setCurrent(prev => {
            return prev + 1 >= props.children.length ? 0 : prev+1
        })
    }

    return (
        <div className="text-center">
            <div className="mb-3">{ bullets }</div>
            {
                React.cloneElement(
                    React.Children.toArray(props.children)[current], 
                    {
                        className:  React.Children.toArray(props.children)[current].props.className + " rounded-circle" 
                    }
                )
            }
        </div>
    );
}

export default JsxSlideShowCard;