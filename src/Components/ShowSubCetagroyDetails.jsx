import {Link} from 'react-router-dom'


const ShowSubCetagroyDetails = ({ subCetegoryDetails }) => {
    const { img, estate_title, segment_name, Status, description, facilities } = subCetegoryDetails || {}
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:space-x-14">
            <div className=" w-full lg:w-[573px] lg:h-[700px]">
                <figure><img data-aos="fade-right" className="lg:w-[425px] lg:h-[620px] rounded-3xl" src={img} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 data-aos="fade-down" className="card-title mb-5  font-bold text-3xl">{estate_title}</h2>
                <div className="flex items-center justify-between mb-5 mr-4">
                    <div>
                        <span className="font-bold text-black pr-2 ">SubCategory :</span> <span className="font-semibold">{segment_name}</span>
                    </div>
                    <div>
                        <span className="font-bold text-black  ">Status :</span> <span className="font-semibold">{Status}</span>
                    </div>
                </div>
                <div className="flex border-y-2 py-4">
                    <span className="font-bold text-black pr-2">Facilities : </span>
                    <ul className="flex gap-3 ">
                        {facilities.map((facility, i) => <li key={i} className="text-[#23BE0A] font-medium px-2 bg-gray-300 rounded-full">{facility}</li>)}
                    </ul>
                </div>
                <div data-aos="fade-left" className="pt-0 border-b-2 pb-3">
                    <span className="font-bold text-black">Description : </span><span>{description}</span>
                </div>
                <div className="flex justify-between mt-6">
                    <div>
                        <span className="font-bold text-black pr-2">Location : </span><span className="font-semibold">Sandy Shores Resort, Florida</span>
                    </div>
                    <div>
                        <p className="font-bold text-black pr-2">Price : $51.55/month</p>
                    </div>
                </div>
                <Link data-aos="fade-up" data-aos-duration="3000" to="/"><button className="btn bottom-0 mt-5  w-full font-bold text-white btn-secondary">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ShowSubCetagroyDetails;