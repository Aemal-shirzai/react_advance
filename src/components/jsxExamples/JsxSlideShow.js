import JsxSlideShowCard from "./JsxSlideShowCard";

const JsxSlideShow = ({ children }) => {
    return (
        <div className="p-3">
            { children }
        </div>
    );
}

JsxSlideShow.Card = JsxSlideShowCard


export default JsxSlideShow;