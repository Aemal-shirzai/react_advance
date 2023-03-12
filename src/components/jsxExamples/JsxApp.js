import JsxSlideShow from "./JsxSlideShow";

const JsxApp = () => {
    return (
        <>
            <h1>JSX Concepts</h1>
            <p>
                JSX Advance Concepts.<br/>
                1. Slide Show with React.Children and React.cloneElement
            </p>
            <hr />
            <div>
                <h3>1. Slide Show</h3>
                <JsxSlideShow>
                    <JsxSlideShow.Card>
                        <img className="bg-dark p-3" src="https://placekitten.com/300/300" alt="cat pic" />
                        <img className="bg-dark p-3" src="https://placekitten.com/300/301" alt="cat pic" />
                        <img className="bg-dark p-3" src="https://placekitten.com/300/302" alt="cat pic" />
                        <img className="bg-dark p-3" src="https://placekitten.com/300/303" alt="cat pic" />
                        <img className="bg-dark p-3" src="https://placekitten.com/300/305" alt="cat pic" />
                        <img className="bg-dark p-3" src="https://placekitten.com/300/306" alt="cat pic" />
                        <img className="bg-dark p-3" src="https://placekitten.com/300/307" alt="cat pic" />
                    </JsxSlideShow.Card>
                </JsxSlideShow>
            </div>
        </>
    );
}


export default JsxApp;