import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"

const RootLayout = () => {
    return (
        <div className="App">
            <NavBar />

            <div className='m-4'>
                <h4>Learn React</h4>
                <Outlet />
            </div>


        </div>
    )
}

export default RootLayout