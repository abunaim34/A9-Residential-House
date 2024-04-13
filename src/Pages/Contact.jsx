import { Helmet } from "react-helmet-async";
import bnr from "../assets/Screenshot 2024-04-13 224541.png"
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Contact = () => {
    return (
        <div className="">
            <Helmet>
                <title>Residential House | Contact us</title>
            </Helmet>
            <section className="flex flex-col items-center h-full sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center ">
                    <img src={bnr} alt="" />
                    <h2 className="text-4xl font-bold">Contact us</h2>
                    <p className="lg:w-1/2">Check out our Products and Stay Safe sections to see if your question has already been answered.
                        If not, please get in touch with us and we will get back to you as soon as possible.
                    </p>
                    <div>
                        <h2 className="text-3xl font-bold">You can also call or email us</h2>
                        <p>Every day from 10:00 AM to 8:00 PM</p>
                    </div>
                </div>
                <div className="flex justify-between items-center flex-col lg:flex-row space-y-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-3 font-bold">
                            <FaPhone />
                            <h4> Call us</h4>
                        </div>
                        <p>01882585833</p>
                    </div>
                    <div className="lg:mx-36 flex flex-col items-center">
                        <div className="flex items-center gap-3 font-bold">
                            <FaLocationDot />
                            <h4>Address</h4>
                        </div>
                        <p>Plot-6, Floor-5, Kemal Ataturk Avenue,</p>
                        <p>Danmondi, Dhaka-1213</p>
                    </div>
                    <div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-3 font-bold">
                                <MdEmail />
                                <h4>Email us</h4>
                            </div>
                            <p>farhanadnanfarabi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;