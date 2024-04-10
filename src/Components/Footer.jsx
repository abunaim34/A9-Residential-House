import { FaGoogle, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="border-b-2 pb-10">
                <div>
                    <h1 className=" text-2xl md:text-4xl font-black bg-gradient-to-r from-[#1DD100] via-black to-primary text-transparent bg-clip-text bg-300% animate-gradient">Residential House</h1>
                    <p className="tex-[#12132D99] pt-5 mx-auto md:w-[690px]"> Empowering people with accessible and actionable information to help them succeed</p>
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4 mt-4">
                        <FaGoogle className="text-2xl text-black" />
                        <FaGithub className="text-2xl text-black" />
                        <FaFacebook className="text-2xl text-black" />
                        <FaInstagram className="text-2xl text-black" />
                    </div>
                </nav>
            </div>
            <aside>
                <p>2024, All Rights Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;