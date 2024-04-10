import { useLoaderData, useParams } from 'react-router-dom'
import ShowSubCetagroyDetails from './ShowSubCetagroyDetails';

const SubCetagoriesDetails = () => {
    const subCategoriesDetails = useLoaderData()
    const {id} = useParams()
    const subCetegoryDetails = subCategoriesDetails.find(details => details.id == id)
    return (
        <div className='lg:mx-36 my-14'>
            <ShowSubCetagroyDetails subCetegoryDetails={subCetegoryDetails}></ShowSubCetagroyDetails>
        </div>
    );
};

export default SubCetagoriesDetails;