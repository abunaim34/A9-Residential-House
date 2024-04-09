
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div>
            <div className="lg:mx-28">
                <Navber></Navber>
            </div>
            <div className='min-h-[calc(100vh-160px)]'>
                <Outlet></Outlet>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Root;