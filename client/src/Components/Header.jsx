import { Container } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom"
const Header = () => {

    const [showLogout, setShowLogout] = useState(true)

    const navigate = useNavigate()

    const { user } = useAuth()

    const onLogout = () => {
        localStorage.clear("user")
        toast.success("Logout successfully")
        navigate("/")

    }

    return (
        <Container maxWidth="lg" sx={{ color: 'white', bgcolor: 'gray', height: "70px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="text-2xl flex gap-4 justify-center items-center ">
                <div className="text-3xl text-center font-bold">Todo</div>
                <div className="ml-4">
                    <ul className="flex justify-center items-center gap-4">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="" >
                {/* onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)} */}

                <Stack direction="row" spacing={2} >

                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{user?.user?.name?.at(0)?.toUpperCase()}</Avatar>
                    <Button variant="contained" onClick={onLogout}
                        sx={{
                            fontSize: '10px'
                        }} >Logout</Button>
                </Stack>


            </div>
        </Container >
    )
}

export default Header