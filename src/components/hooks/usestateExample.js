import { useEffect, useState } from "react";


function setupDefaultValues() {
    return {
        goal: "",
        by: "",
        completed: false
    }
}

const GoalForm = (props) => {
    const [formData, setFormData] = useState(() => setupDefaultValues())

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(formData);
        setFormData(setupDefaultValues())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="goal" onChange={handleOnchange} value={formData.goal}  className="form-control mb-1" placeholder="goal.."/>
                <input type="text" name="by" onChange={handleOnchange} value={formData.by} className="form-control mb-1" placeholder="by.."/>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
}

const GoalList = (props) => {
    const liStyles = { cursor: "pointer" }

    function toggleCompleted(index) {
        const updatedItems = props.goals.map((item, currentIndex) => {
                return (currentIndex === index ? { ...item, completed: !item.completed } : item)
            }); 
        props.onComplete(updatedItems);
      }

    return (
        <div>
            <ul>
                {
                    props.goals.map((goal, index) => {
                      return  <li title="click to complete" key={goal.goal} onClick={() => toggleCompleted(index)}
                                style={{...liStyles,  textDecoration: goal.completed && 'line-through'}} >
                            My goal is to { goal.goal }, by {goal.by}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

const UseStateApp = () => {
    const [goals, setGoals] = useState([])

    const addGoal = (newData) => {
        setGoals(prev => [...prev, newData])
    }

    const completeGoal = (newData) => {
        setGoals(newData)
    }

    return (
        <div>
            <h1 className="mb-3">useState Hook</h1>
            <p>Simple goals application for useState.</p>
            <hr />
            <GoalForm onAdd={addGoal}/>
            <hr />
            <GoalList goals={goals} onComplete={completeGoal}/>
        </div>
    );
}

export default UseStateApp;