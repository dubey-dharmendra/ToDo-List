import { Button, Container, Stack, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from "../services/axios"

import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import TaskCard from './TaskCard'
import EditTask from './EditTask'
import { useNavigate } from 'react-router-dom'


const Main = () => {

    const { user } = useAuth()
    const userId = user?.user?._id
    const token = user.token

    const navigate = useNavigate()

    const [taskDetails, setTaskDetails] = useState([])
    const [editTask, setEditTask] = useState(null)



    const fetchTask = async () => {

        try {
            const getTasks = await axios.get(`/get-task/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            setTaskDetails(getTasks?.data?.tasks || [])
        } catch (error) {
            toast.error(error.response.data.error)
            navigate("/")
        }

    }

    const updateTask = async (task) => {
        try {
            const updatedData = await axios.patch(`update/${task._id}`,
                { title: task.title, startTime: task.startTime, endTime: task.endTime },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            taskDetails[task.index] = updatedData?.data?.updatedTask
            setEditTask(null)
        } catch (err) {
            toast.error(err)
        }

    }


    const deleteTask = async (task) => {

        try {
            await axios.delete(`delete/${task._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            toast.success("Task deleted successfully")
            await fetchTask()

        } catch (err) {
            toast.error(err)
        }

    }


    useEffect(() => {

        if (userId && token) {
            fetchTask();
        } else {
            toast.error("Token Expired")
            navigate("/")
        }

    }, [userId, token])

    const handleEdit = (index) => {
        setEditTask({ ...taskDetails[index], index })
    }

    const formHandle = async (formData) => {
        const data = Object.fromEntries(formData.entries())

        try {
            const apiResult = await axios.post("/createTask", data, {
                headers: { Authorization: `Bearer ${user.token}` }
            })
            toast.success("task created successfully")

            setTaskDetails(prev => [...prev, apiResult?.data?.task])

        } catch (error) {

            toast.error(error)
        }


    }

    return (
        <Container maxWidth='md' sx={{ bgcolor: "#1E1F1E", marginTop: "2px" }} >

            <div className='py-4 overflow-y'>

                <form action={formHandle} className='flex gap-4 justify-center'>
                    <input type="text" placeholder='enter task...' name='title' className='w-[60%] border-2 border-white text-white rounded-md px-2' />

                    <input
                        className='text-white  border-2 border-white px-2'
                        label="Start Time"
                        type="time"
                        name="startTime"
                        defaultValue="00:00"
                    // onChange={(e) => setStartTime(e.target.value)}
                    />
                    <input
                        className='text-white  border-2 border-white px-2'
                        label="End Time"
                        type="time"
                        name="endTime"
                        defaultValue="00:00"
                    // onChange={(e) => setEndTime(e.target.value)}

                    />

                    <Button type='submit' variant='contained'>Add task</Button>

                </form>

            </div>

            <div>
                <div className='text-white py-4 flex flex-col gap-4 justify-center items-center'>

                    {taskDetails?.map((task, index) => {
                        return (
                            <TaskCard task={task} key={index} onEdit={() => handleEdit(index)} onDelete={() => deleteTask(task)} />
                        )
                    })}
                </div>

                {editTask &&
                    <EditTask
                        task={editTask}
                        onUpdate={updateTask}
                        onClose={() => setEditTask(null)}
                    />}

            </div>

        </Container >
    )
}

export default Main