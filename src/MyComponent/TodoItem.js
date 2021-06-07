import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn-sm btn-danger" onClick={()=>{onDelete(todo)}}> Delete</button> 
            <hr/>
             {/* refer notes why we used an arrow function here. */}
            
        </div>
        </>
    )
}