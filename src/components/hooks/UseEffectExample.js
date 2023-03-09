import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const UseEffectApp = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('todos');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${searchQuery}`)
            .then(response => response.json())
            .then(json => {
                setApiData(json)
                setSearchParams({type: searchQuery})
            })
    }, [searchQuery])


    const handleWidth = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        }
    }, []);

    return (
        <div>
            <h1>Use Effect</h1>
            <p>
                React useEffect hook which implements sideEffects inside an pure function <br/>
                1. It make api call to get json placeholder data based on button click.<br/>
                2. Display window width as it resized. And also it remove the listener on unmount.
            </p>
            <hr />
            <div>
                <h4>1. Window Width</h4>
                <div>
                    <h2>{ windowWidth } </h2>
                </div>
            </div>

            <hr />

            <div>
                <h4>2. API Call example { searchQuery }</h4>
                <div>
                    <button className="m-1" onClick={() => setSearchQuery('todos')}>Todos</button>
                    <button className="m-1" onClick={() => setSearchQuery('albums')}>Albums</button>
                    <button className="m-1" onClick={() => setSearchQuery('photos')}>Photos</button>
                    <button className="m-1" onClick={() => setSearchQuery('posts')}>Posts</button>
                    <button className="m-1" onClick={() => setSearchQuery('comments')}>Comments</button>
                    <button className="m-1" onClick={() => setSearchQuery('users')}>Users</button>
                </div>
                <div className="bg-dark text-white p-4">
                    {
                        apiData.map(data => {
                            return <pre key={data.id}>{ JSON.stringify(data) }</pre>
                        })
                    }
                </div>

            </div>


        </div>
    );
}

export default UseEffectApp;