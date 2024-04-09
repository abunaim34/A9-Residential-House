import {useLoaderData} from 'react-router-dom'
import EstateCard from './EstateCard';

const Estate = () => {
    const data = useLoaderData()
    return (
        <div className="text-center my-16">
            <h1 className="text-4xl font-bold">Residential Estate</h1>
            <p className='lg:mx-40 mx-4 mt-5'>Lorem ipsum dolor, Delectus non tempora ut veniam, optio illum ullam iusto ratione repellat! Architecto dolore vel tempore fugiat ducimus.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    data.map(card => <EstateCard key={card.id} card={card}></EstateCard>)
                }
            </div>
        </div>
    );
};

export default Estate;