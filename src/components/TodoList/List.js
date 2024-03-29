import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { MdDone } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

const List = () => {
	const [doneItems, setDoneItems] = useState(false)
	const { todo } = useSelector(todo => todo)
	const { done } = useSelector(done => done)
	const [bg, setBg] = useState(false)
	const [checkbox, setCheckbox] = useState('')
	const dispatch = useDispatch()
	function DeleteTask(id) {
		const del = todo.filter(el => el.id !== id)
		dispatch({ type: 'DELETE_TASK', payload: del })
		// console.log(del)
	}

	function handleChange(id) {
		setDoneItems(el => ({ ...el, [id]: !el[id] }))

		console.log(doneItems[id])
	}

	// console.log(checkbox.target.value);

	// console.log(bg);

	// console.log(todo)

	return (
		<div>
			{todo.map(el => (
				<div
					style={{
						background: doneItems[el.id] ? 'MediumSeaGreen' : 'black',
						wordBreak: 'break-word'
					}}
					key={el.id}
					className={`list w-[750px] flex items-start justify-start  h-15  ease-out rounded-md p-3 
                        bg-gray-900 mb-5`}
				>
					<button
						style={{
							transition: '.3s'
						}}
						onClick={() => handleChange(el.id)}
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2.5 rounded-full'
					>
						{doneItems[el.id] ? <IoCheckmarkDoneSharp /> : <MdDone />}
					</button>
					<div className='todoText px-3'>
						<h1
							style={{
								color: 'white'
							}}
						>
							{el.title}
						</h1>
					</div>
					<div style={{ flex: '1' }}></div>{' '}
					{/* Этот блок занимает всё доступное пространство */}
					<button
						type='button'
						onClick={() => DeleteTask(el.id)}
						className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
					>
						<MdDelete />
					</button>
				</div>
			))}
		</div>
	)
}

export default List
