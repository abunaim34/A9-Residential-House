import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const EstateCard = ({card}) => {
    const {id, img, estate_title, segment_name, price, Status, Area} = card || {}
    return (
        <div className="p-6 mt-8 flex flex-col flex-grow rounded-md shadow-lg dark:bg-gray-50 dark:text-gray-900">
            <img src={img} alt="" className="w-full shadow-2xl rounded-md dark:bg-gray-500" />
            <div className="mt-6 mb-2 space-y-4 border-b-2 pb-5  border-dashed">
                <h2 className="text-2xl font-bold text-center lg:text-start">{estate_title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-medium text-start">{segment_name}</p>
                    <p className="font-medium">Status: {Status}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium">price: <span className="font-semibold">{price}</span></p>
                <p className="font-medium">Area: {Area}</p>
            </div>
            <Link to={`/${id}`}><button className="btn bottom-0 mt-5  w-full font-bold text-white bg-[#23BE0A]">View Property</button></Link>
        </div>
    );
};

EstateCard.propTypes ={
    card: PropTypes.object.isRequired,
}

export default EstateCard;