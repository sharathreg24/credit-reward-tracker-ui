import React from 'react';
import { InfoPopup } from './InfoPopup';

const CreditCardTable = ({ cards }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Credit Card</th>
                    <th>APR</th>
                    <th>0% APR Until</th>
                    <th>Intro Bonus</th>
                    <th>Cashback</th>
                    <th>Rotating Categories (this quarter)</th>
                    <th>Special Intro Offer</th>
                </tr>
            </thead>
            <tbody>
                {cards.map(card => (
                    <tr key={card.name}>
                        <td>
                            <img src={card.image} alt={card.name} />
                            <div>{card.name}</div>
                            <div>Acquired: {card.acquiredDate}</div>
                        </td>
                        <td>{card.apr}</td>
                        <td>{card.zeroAprUntil}</td>
                        <td>{card.introBonus}</td>
                        <td>
                            <ul className= "cb-ul">
                                {Object.entries(card.fixedCategories).map(([key, value]) => (
                                    <li className="cb-li" key={key}>
                                        <b>{key}:</b> {value.points}x
                                        {/* <InfoPopup>
                                            {value.note}
                                        </InfoPopup> */}
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>{card.rotatingCategories.join(', ')}</td>
                        <td>{card.specialIntroOffer}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CreditCardTable;

// import React from 'react';

// const CreditCardTable = ({ cards }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Credit Card</th>
//           <th>Acquired Date</th>
//           <th>APR</th>
//           <th>0% APR Until</th>
//           <th>Intro Bonus</th>
//           <th>Cashback</th>
//           <th>Rotating Categories</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cards.map((card) => (
//           <tr key={card.name}>
//             <td>
//               <img src={card.image} alt={card.name} />
//               <p>{card.name}</p>
//             </td>
//             <td>{card.acquiredDate}</td>
//             <td>{card.apr}</td>
//             <td>{card.zeroAprUntil}</td>
//             <td>{card.introBonus}</td>
//             
//             <td>{card.rotatingCategories}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default CreditCardTable;
