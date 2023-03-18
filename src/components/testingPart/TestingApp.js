import FeedbackForm from "./FeedbackForm";

const TestingApp = () => {
    
    const handleSubmit = () => {
        console.log("Form submitted!");
    };

    return (
        <div>
            <h1>Testing Features</h1>
            <hr/>

            <div className="container p-5">
                <FeedbackForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default TestingApp;