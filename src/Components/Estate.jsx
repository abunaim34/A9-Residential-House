import {useLoaderData} from 'react-router-dom'
import EstateCard from './EstateCard';

const Estate = () => {
    const subCategories = useLoaderData()
    return (
        <div className="text-center my-16">
            <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-4xl font-bold">Residential Estate</h1>
            <p data-aos="fade-up" data-aos-duration="3000" className='lg:mx-40 mx-4 mt-5'>Lorem ipsum dolor, Delectus non tempora ut veniam, optio illum ullam iusto ratione repellat! Architecto dolore vel tempore fugiat ducimus.</p>
            <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    subCategories.map(subCategory => <EstateCard key={subCategory.id} subCategory={subCategory}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;