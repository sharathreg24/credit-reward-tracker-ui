import React, { useState } from 'react';
import CreditCardTable from './CreditCardTable';

const AllCreditCardsAdded = () => {
    const [cards, setCards] = useState([
        {
            name: 'Freedom Flex',
            image: 'https://via.placeholder.com/100x50',
            acquiredDate: '01/06/2023',
            apr: '24.99%',
            zeroAprUntil: '03/06/2024',
            introBonus: '$200 bonus on $500 spent in first 3 months',
            cashback: '1% on all purchases',
            fixedCategories: {
                "Travel": {
                    "points": "5",
                    "note": "purchased through chase ultimate rewards portal"
                },
                "Restaurants": {
                    "points": "3",
                    "note": "on dining at restaurants, including takeout and eligible delivery services"
                },
                "Drugstores": {
                    "points": "3",
                    "note": "on drugstores like CVS"
                },
                "EverythingElse": {
                    "points": "1",
                    "note": "all other purchases"
                }
            },
            rotatingCategories: ["grocery-stores, fitness-clubs, Target"],
            specialIntroOffer: '5% CB on Groceries(Excluding Target, Walmart) for 1 year, up to $12,000 spent(equals $600)',
            hasForeignTransactionFee: 'yes'
        },
        {
            name: 'Wells Fargo Autograph',
            image: 'https://via.placeholder.com/100x50',
            acquiredDate: '08/06/2023',
            apr: '24.99%',
            zeroAprUntil: '08/06/2024',
            introBonus: '$300 bonus on $1500 spent in first 3 months',
            cashback: '1% on all purchases',
            fixedCategories: {
                "Restaurants": {
                    "points": "3",
                    "note": "on dining at restaurants, including takeout and eligible delivery services"
                },
                "Travel": {
                    "points": "3",
                    "note": "airfare, hotels, car rentals, cruises and more"
                },
                "Gas & Electric Stations": {
                    "points": "3",
                    "note": "gas stations and electric vehicle charging stations"
                },
                "Transit": {
                    "points": "3",
                    "notes": "subways, ride shares, parking, tolls and more"
                },
                "Popular Streaming Services": {
                    "points": "3",
                    "note": "https://www.wellsfargo.com/credit-cards/autograph-visa/streaming/"
                },
                "Phone Plans": {
                    "points": "3",
                    "note": "cell phone and landline providers"
                },
                "EverythingElse": {
                    "points": "1",
                    "note": "all other purchases"
                }
            },
            rotatingCategories: [],
            specialIntroOffer: 'None',
            hasForeignTransactionFee: 'no'
        },
        {
            name: 'AMEX Platinum',
            image: 'https://via.placeholder.com/100x50',
            acquiredDate: '03/09/2023',
            apr: '26.49%',
            zeroAprUntil: '00/00/0000',
            introBonus: '15000 points bonus on $6000 spent in first 6 months',
            cashback: '1% on all purchases',
            fixedCategories: {
                "Travel": {
                    "points": "5",
                    "note": "airfare, hotels, car rentals, cruises and more"
                },
                "Hotels": {
                    "points": "5",
                    "note": "Booked on AmexTravel.com"
                },
                "Transit": {
                    "points": "3",
                    "notes": "subways, ride shares, parking, tolls and more"
                },
                "EverythingElse": {
                    "points": "1",
                    "note": "all other purchases"
                }
            },
            rotatingCategories: [],
            specialIntroOffer: '150k bonus + $200 statement credit in first three months',
            hasForeignTransactionFee: 'no'
        }
    ]);

    return (
        <div>
            <CreditCardTable cards={cards} />
        </div>
    );
};

export default AllCreditCardsAdded;
