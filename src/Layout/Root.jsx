
import Navber from "../Components/Navber";
import { Outlet } from "react-router-dom"

const Root = () => {
    return (
        <div>
            <div className="lg:mx-28">
                <Navber></Navber>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;