
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div>
            <div className="lg:mx-28 mt-10">
                <Navber></Navber>
            </div>
            <div className='min-h-[calc(100vh-435px)]'>
                <Outlet></Outlet>
            </div>
            <div className="mt-14"><Footer /></div>
        </div>
    );
};

export default Root;