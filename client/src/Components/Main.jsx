import { Button, Container, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'


const taskData = [
    {
        title: "Fresh",
        timeStart: "05:30 AM",
        timeEnd: "06:00 AM",
        Date: "02-08-2025"
    },
    {
        title: "Fresh",
        discription: "bath,toothpaste,toilate",
        timeStart: "05:30 AM",
        timeEnd: "06:00 AM",
        Date: "02-08-2025"
    },
    {
        title: "Fresh",
        discription: "bath,toothpaste,toilate",
        timeStart: "05:30 AM",
        timeEnd: "06:00 AM",
        Date: "02-08-2025"
    },

]

const Main = () => {

    const [taskDetails, setTaskDetails] = useState(taskData)


    const formHandle = (formData) => {

        const data = Object.fromEntries(formData.entries())

        setTaskDetails([{
            endTime: data.endTime,
            startTime: data.startTime,
            task: data.task,
            Date: "02-08-2025",
        }, ...taskData])



    }

    return (
        <Container maxWidth='md' sx={{ bgcolor: "#1E1F1E", marginTop: "2px" }}>

            <div className='  py-4'>

                <form action={formHandle} className='flex gap-4 justify-center'>
                    <input type="text" placeholder='enter task...' name='task' className='w-[60%] border-2 border-white text-white rounded-md px-2' />


                    <input
                        className='text-white  border-2 border-white'
                        label="Start Time"
                        type="time"
                        name="startTime"
                        defaultValue="00:00"
                    // onChange={(e) => setStartTime(e.target.value)}
                    />
                    <input
                        className='text-white  border-2 border-white'
                        label="End Time"
                        type="time"
                        name="endTime"
                        defaultValue="00:00"
                    // onChange={(e) => setEndTime(e.target.value)}

                    />

                    <Button type='submit' variant='contained'>Add task</Button>

                </form>

            </div>

            <div className='text-white py-4 flex flex-col gap-4 justify-center items-center'>

                {console.log(taskDetails)}
                {taskDetails.map((task, index) => {
                    return (
                        <div className='w-[500px] text-center bg-gray-600 p-4 rounded-xl grid grid-cols-2 grid-rows-2' key={index} >
                            <span className='py-4'>startTime: {task.timeStart}</span>
                            <span className='py-4'>endTime: {task.timeEnd}</span>
                            <p className='py-4 col-span-2'>title:{task.title}</p>
                        </div>


                    )
                })}
            </div>

        </Container >
    )
}

export default Main