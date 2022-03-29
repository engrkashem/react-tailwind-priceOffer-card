import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benifits: [
                'Life Time Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benifits: [
                'Everything Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benifits: [
                'Everything Regular',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        }
    ]

    return (
        <div className='bg-indigo-500 p-4 mt-8'>
            <h1 className='text-6xl mb-2 text-white font-serif'>Best Deals of the City</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quaerat.</p>
            <div className=' grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption
                        kay={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>

    );
};

export default Pricing;