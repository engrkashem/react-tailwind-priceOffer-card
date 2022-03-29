
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';

const PricingOption = ({ option: { name, price, benifits, id } }) => {
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className=' bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-600'>/mo</span>
            </p>
            <h3 className='text-xl text-left'>Benifits:</h3>
            {
                benifits.map(benifit => <Benifit
                    key={id}
                    benifit={benifit}
                ></Benifit>)
            }
            <button className=' bg-green-500 flex justify-center w-1/2 mx-auto mt-6 p-3 rounded-lg text-white gap-2 font-bold hover:text-green-800'>
                Buy Now <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;