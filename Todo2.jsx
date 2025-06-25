import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_data":
            return {
                ...state,
                input: action.value
            }

        case "Data_show":
            return {
                ...state,
                task: [...state.task, state.input],
                input: ""
            }


        case "Delete_data":
            const update_data = state.task.filter((_,index)=> index !== action.index)
            return{
                ...state,
                 task : update_data
                }    
        default:
            return state
    }

}

const Todo2 = () => {
    const initalstate = {
        input: '',
        task: []
    }
    const [AddData, dispatch] = useReducer(reducer, initalstate)
    // const [listdata, setlistdata] = useState();
    const add_task = (event) => {
        dispatch({ type: "ADD_data", value: event.target.value })
    }

    const add_list = (event) => {
        event.preventDefault();
        console.log(AddData);
        dispatch({ type: "Data_show" })
    }

    const delete_task = (index) => {
        dispatch({ type: "Delete_data" ,index })
        // console.log("mark data");
        
    }
    return (
        <div>
            <input type="text"
                placeholder='Enter your task'
                onInput={add_task}
            />

            <button onClick={add_list}>ADD</button>

            <ul>{AddData.task.map((task, index) => (
                <li key={index}>{task}
                    <button className= "delbtn" onClick={()=>delete_task(index) }>X</button></li>
            ))}</ul>
        </div>
    )
}

export default Todo2
