import React from 'react'
import { useSelector } from 'react-redux'
import { DELETE_TODO } from '../Reduce/constant'

export const ShowTodos = ({ data, dispacthh }) => {   
    const see = data.map(item => (
        <li key={item.id} onClick={() => dispacthh(item.id)}>
            {item.name} @ {item.id}
        </li>
    ))
    if (!see.length)
        return (<li>No Hay</li>)
    return (
        [see]
    )
}