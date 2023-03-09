import { useState } from "react";
import { useMemo } from 'react';

const todos = createTodos();

export function createTodos() {
    const todos = [];
    for (let i = 0; i < 50; i++) {
        todos.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });
    }
    return todos;
}

export function filterTodos(todos, tab) {
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    return todos.filter(todo => {
        if (tab === 'all') {
            return true;
        } else if (tab === 'active') {
            return !todo.completed;
        } else if (tab === 'completed') {
            return todo.completed;
        }
    });
}

function TodoList({ todos, theme, tab }) {
    
    // this code memorize
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );

    // This code does not
    // const visibleTodos = filterTodos(todos, tab);
    return (
        <div className={theme}>
            <ul>
                <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ?
                            <s>{todo.text}</s> :
                            todo.text
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}


const UseMemoEx = () => {
    const [tab, setTab] = useState('all');
    const [isDark, setIsDark] = useState(false);


    return (
        <div>
            <h1 className="mb-3">Read useMemo</h1>
            <p>
                In this example changing theme and changing tabas do not rely on each other.
                <br/>
                Todo list value is cached and chnaged ony if the tab or todos values is changed.
            </p>

            <hr />
            <button onClick={() => setTab('all')}>
                All
            </button>
            <button onClick={() => setTab('active')}>
                Active
            </button>
            <button onClick={() => setTab('completed')}>
                Completed
            </button>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={e => setIsDark(e.target.checked)}
                />
                Dark mode
            </label>
            <hr />
            <TodoList
                todos={todos}
                tab={tab}
                theme={isDark ? 'dark' : 'light'}
            />
        </div>
    );

}


export default UseMemoEx;