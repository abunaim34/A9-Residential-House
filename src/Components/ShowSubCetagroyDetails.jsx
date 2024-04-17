import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";


const ShowSubCetagroyDetails = ({ subCetegoryDetails }) => {
    const { img, estate_title, segment_name, Status, description, facilities, location, price, Area } = subCetegoryDetails || {}
    return (
        <div className="card lg:w-[1000px] md:w-[700px] mx-auto bg-base-100 border border-t-0 shadow-xl lg:space-x-14">
            <Helmet>
                <title>Residential House | SubCategory Details</title>
            </Helmet>
            <div className=" w-full text-center">
                <figure><img data-aos="fade-down" className="w-[300px] md:w-[650px] lg:w-[850px] md:h-[500px] h-full rounded-3xl" src={img} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 data-aos="fade-down" className="card-title mb-5 font-bold text-2xl md:text-3xl">{estate_title}</h2>
                <div className="flex items-center justify-between mb-5 ">
                    <div>
                        <span className="font-bold text-black pr-2 ">SubCategory :</span> <span className="font-semibold">{segment_name}</span>
                    </div>
                    <div className='flex gap-2'>
                        <span className="font-bold text-black  ">Status:</span> <span className="font-semibold">{Status}</span>
                    </div>
                </div>
                <div className='flex justify-between flex-col md:flex-row border-y-2 py-4'>
                    <div className="flex flex-col md:flex-row">
                        <span className="font-bold text-black pr-2">Facilities : </span>
                        <ul className="flex ">
                            {facilities.map((facility, i) => <li key={i} className="text-[#23BE0A] font-medium px-4 bg-gray-300 rounded-full">{facility}</li>)}
                        </ul>
                    </div>
                    <div className='mt-3 md:mt-0'>
                        <span className="font-bold text-black  ">Area:</span><span className="font-semibold">{Area}</span>
                    </div>
                </div>
                <div data-aos="fade-right" className="pt-0 border-b-2 pb-3 ">
                    <span className="font-bold text-black">Description : </span><span >{description}</span>
                </div>
                <div className="flex justify-between mt-6">
                    <div>
                        <span className="font-bold text-black pr-2">Location : </span><span className="font-semibold">{location}</span>
                    </div>
                    <div>
                        <p className="font-bold text-black pr-2">Price : {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShowSubCetagroyDetails.propTypes = {
    subCetegoryDetails: PropTypes.object.isRequired
}

export default ShowSubCetagroyDetails;