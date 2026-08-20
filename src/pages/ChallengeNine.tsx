import React, { useState } from 'react';

const initialTodos = [
    {
        id: 1,
        todo: 'Grocery shopping',
       completed: false, 
    },
    {
        id: 2,
        todo: 'Clean kitchen',
        completed: true,
    },
    {
        id: 3,
        todo: 'Wash clothes',
        completed: false,
    }
]

export default function ChallengeNine() {
    const [inputVal, setInputVal] = useState<string>('')
    const [editVal, setEditVal] = useState<string>('')
    const [editTodo, setEditTodo] = useState<{ id: Number | null, todo: string | null}>({ id: null, todo: null })
    const [todos, setTodos] = useState<{ id: Number, todo: string, completed: boolean }[]>(initialTodos);

    const handleAddTodo = (todo: string) => {
    // add new todo on the end of todos list
        setTodos((prevTodos) => [...prevTodos, {
            id: Number(todos.length + 1),
            todo: todo,
            completed: false
        }]);
    }

    const handleRemoveTodo = (id: Number) => {
        // remove by filtering by id
        setTodos((prev) => (
            prev.filter((todo) => todo.id !== id )
        ));
    }

    const handleEditTodo = (id: Number, todo: string) => {
        setTodos(prev => (
            prev.map((item) => item.id === id ? {
                ...item, todo: todo
            } : item)
        ))
        setEditTodo({ id: null, todo: null })
    }

    const handleCheck = (id: Number) => {
        // map to check id
        //if match, set !completed value
        setTodos((prev) => (
            prev.map((todo) => todo.id === id ? {
                ...todo, completed: !todo.completed
            } : todo)
        ));
    }

    console.log(todos)


    return (
      <>
            <h2>Basic Todo List</h2>
            <p> Create a simple todo list application that can add, edit, and remove tasks.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTodo(inputVal);
            setInputVal('');
          }}
        >
          Add to my list:{' '}
          <input
            type='text'
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
                />
                <button type='submit'>Add</button>
        </form>
        <ul >
          {todos.map((todo, i) => (
            <li className='todos' key={i}>
              <input
                type='checkbox'
                      checked={todo.completed}
                      
                onChange={() => handleCheck(todo.id)}
              />
                <label
                onClick={() => {
                          setEditTodo({ id: todo.id, todo: todo.todo });
                          setEditVal(todo.todo);
                }}
              >
                {' '}
                {todo.todo}{' '} 
              </label>
              <button onClick={() => handleRemoveTodo(todo.id)}>x</button>
             {editTodo.id === todo.id ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditTodo(todo.id, editVal);
                    setEditVal('');
                  }}
                >
                  <input
                    type='text'
                    value={editVal}
                    onChange={(e) => setEditVal(e.target.value)}
                          />
                          <button type='submit'>Save</button>
                          <button className='cancel-button' onClick={() => setEditTodo({ id: null, todo: null })}>Cancel</button>
                </form>
              ) : null}
            </li>
          ))}
        </ul>
      </>
    );
};