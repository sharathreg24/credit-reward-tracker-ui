// import React, { useState } from 'react';

// const AddCard = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expirationMonth, setExpirationMonth] = useState('');
//   const [expirationYear, setExpirationYear] = useState('');
//   const [apr, setApr] = useState('');
//   const [comments, setComments] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add code to submit the form data to a server or perform other actions
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="card-number">Credit Card Number:</label>
//         <input
//           type="text"
//           id="card-number"
//           name="card-number"
//           value={cardNumber}
//           onChange={(event) => setCardNumber(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="expiration-month">Expiration Month:</label>
//         <input
//           type="text"
//           id="expiration-month"
//           name="expiration-month"
//           value={expirationMonth}
//           onChange={(event) => setExpirationMonth(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="expiration-year">Expiration Year:</label>
//         <input
//           type="text"
//           id="expiration-year"
//           name="expiration-year"
//           value={expirationYear}
//           onChange={(event) => setExpirationYear(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="apr">APR:</label>
//         <input
//           type="text"
//           id="apr"
//           name="apr"
//           value={apr}
//           onChange={(event) => setApr(event.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="comments">Comments:</label>
//         <textarea
//           id="comments"
//           name="comments"
//           value={comments}
//           onChange={(event) => setComments(event.target.value)}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddCard;
import React, { useState } from 'react';

const AddCard = () => {
    const [creditCardDetails, setCreditCardDetails] = useState({
        creditCardName: '',
        image: '',
        acquiredDate: '',
        apr: '',
        zeroAprUntil: '',
        introBonus: '',
        cashback: {
            restaurants: '',
            groceries: '',
            gasStations: '',
            hotels: '',
        },
        rotatingCategories: ''
    });

    const handleInputChange = event => {
        setCreditCardDetails({
            ...creditCardDetails,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Submit credit card details here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="creditCardName">Credit Card Name:</label>
                <input
                    type="text"
                    id="creditCardName"
                    name="creditCardName"
                    value={creditCardDetails.creditCardName}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={creditCardDetails.image}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="acquiredDate">Acquired Date:</label>
                <input
                    type="text"
                    id="acquiredDate"
                    name="acquiredDate"
                    value={creditCardDetails.acquiredDate}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="apr">APR:</label>
                <input
                    type="text"
                    id="apr"
                    name="apr"
                    value={creditCardDetails.apr}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="zeroAprUntil">0% APR Until:</label>
                <input
                    type="text"
                    id="zeroAprUntil"
                    name="zeroAprUntil"
                    value={creditCardDetails.zeroAprUntil}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="introBonus">Intro Bonus:</label>
                <input
                    type="text"
                    id="introBonus"
                    name="introBonus"
                    value={creditCardDetails.introBonus}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="restaurants">Restaurants:</label>
                <input
                    type="text"
                    id="restaurants"
                    name="restaurants"
                    value={creditCardDetails.cashback.restaurants}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="groceries">Groceries:</label>
                <input
                    type="text"
                    id="groceries"
                    name="groceries"
                    value={creditCardDetails.cashback.groceries}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="gasStations">Gas Stations:</label>
                <input
                    type="text"
                    id="gasStations"
                    name="gasStations"
                    value={creditCardDetails.cashback.gasStations}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="hotels">Hotels:</label>
                <input
                    type="text"
                    id="hotels"
                    name="hotels"
                    value={creditCardDetails.cashback.hotels}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
}

export default AddCard;
