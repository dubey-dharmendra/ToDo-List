

const EditTask = ({ task, onUpdate, onClose }) => {


    const handleEdit = (formData) => {

        const saveData = Object.fromEntries(formData.entries())
        const data = { ...task, ...saveData }
        onUpdate(data)
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="bg-gray-500 text-black p-6 rounded-lg w-[400px]">
                <h2 className='text-2xl text-center my-4'>Edit Task</h2>
                <form action={handleEdit} >
                    <div>

                        <input type="text" placeholder='enter task...' name='title' defaultValue={task.title}
                            className='w-full border-2 border-white text-white rounded-md px-2 py-2 my-4 mx-auto' />
                    </div>
                    <div className="flex justify-around">

                        <input
                            className='text-white  text-xl border-2 border-white px-2 mx-2'
                            label="Start Time"
                            type="time"
                            name="startTime"
                            defaultValue={task.startTime}
                        />
                        <input
                            className='text-white text-xl  border-2 border-white px-2'
                            label="End Time"
                            type="time"
                            name="endTime"
                            defaultValue={task.endTime}

                        />

                    </div>
                    <div className="flex justify-end my-8">
                        <button type='button' onClick={onClose} className='bg-blue-600 px-4 py-2 mx-4 rounded-md hover:bg-blue-400'>Close</button>
                        <button type='submit' className='bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-400'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTask