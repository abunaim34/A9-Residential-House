import {useLoaderData} from 'react-router-dom'

const CardDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            this is details
        </div>
    );
};

export default CardDetails;