import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from './List'
import loadingIcon from '../Infinity-1s-92px.svg'

const TodoList = () => {
	const [value, setValue] = useState('')
	const [loading, setLoading] = useState(false)
	const { todo } = useSelector(todo => todo)
	const dispatch = useDispatch()
	const addTask = () => {
		setValue('')
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			// console.log();
			if (value.trim() !== '') {
				dispatch({ type: 'TODO', payload: value })
			} else {
				alert('Заполните поле!')
			}
		}, 300)
	}
	if (loading) {
		return (
			<div className='loading flex items-center justify-center mt-20'>
				<img className='' src={loadingIcon} alt='' />
			</div>
		)
	}
	// console.log(loading)
	function Keydown(e) {
		// setValue('')
		e.key === 'Enter' ? addTask() : console.log(e.key)
	}

	// console.log(todo)
	// console.log(value)
	return (
		<div className=''>
			<div class='mt-6 flex items-centern justify-center gap-5'>
				<input
					value={value}
					onKeyDown={
						Keydown

						// Keydown(e.eve)
					}
					onChange={e => setValue(e.target.value)}
					type='text'
					id='default-input'
					class='bg-gray-50 border border-gray-300 text-gray-900 text-auto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				/>
				<button
					onClick={addTask}
					class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
				>
					add
				</button>
			</div>
			<div className='flex items-center justify-center mt-6 '>
				<List />
			</div>
		</div>
	)
}

export default TodoList
