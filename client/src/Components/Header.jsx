import { Container } from "@mui/material"
import { NavLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useState } from "react";
const Header = () => {

    const [showLogout, setShowLogout] = useState(true)




    return (
        <Container maxWidth="lg" sx={{ color: 'white', bgcolor: 'gray', height: "70px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="text-2xl">
                Todo
            </div>
            <div className="" >
                {/* onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)} */}

                <Stack direction="row" spacing={2} >

                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    <Button variant="contained"
                        sx={{
                            fontSize: '10px'
                        }} >Logout</Button>
                </Stack>


            </div>
        </Container >
    )
}

export default Header