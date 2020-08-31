import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TODO, DELETE_TODO } from '../Reduce/constant'
import { postTodos } from '../Reduce/actions'

export const InputTodos = ({ dispatch }) => {
    const [val, setVal] = useState('')

    const handleChangeValue = e => {
        setVal(e.target.value)
    }
    const handleDispatch = () => {
        dispatch(postTodos({
            name: val,
            id: Math.ceil(Math.random() * 100)
        }))
        setVal('');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input value={val} onChange={handleChangeValue} type='text' />
            <button type='submit' onClick={handleDispatch}>Adicionar!</button>
        </div>
    )
}