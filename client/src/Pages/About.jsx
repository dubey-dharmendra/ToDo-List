import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

const About = () => {

    const userContext = useAuth()
    const user = userContext?.user?.user


    return (
        <div className="w-[900px] mx-auto bg-blue-900 ">
            < div className=" bg-blue-600 text-whitle" >
                <table>


                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                        </tr>
                    </tbody>

                </table>


            </ div>
        </div >
    )
}

export default About