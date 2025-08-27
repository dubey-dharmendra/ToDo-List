

const TaskCard = ({ task, onEdit, onDelete }, key) => {

    return (
        <div className='w-[500px] bg-gray-600 p-4 rounded-xl flex justify-between' key={key} >
            <div className='grid grid-cols-2 grid-rows-2 '>
                <span className=''>startTime: {task.startTime}</span>
                <span className='mr-9'>endTime: {task.endTime}</span>
                <p className='col-span-2 my-2'>title:{task.title}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <button type="button" onClick={onEdit} className='bg-blue-800 px-4 py-2  rounded-xl text-xl'>Edit</button>
                <button type="button" onClick={onDelete} className='bg-blue-800 px-4 py-2  rounded-xl text-xl'>Delete</button>
            </div>
        </div>
    )
}

export default TaskCard