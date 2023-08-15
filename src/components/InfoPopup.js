// import React, { useState } from 'react';

// export function InfoPopup(props) {
//     const [showPopup, setShowPopup] = useState(false);

//     return (
//         <div>
//             <button onClick={() => setShowPopup(!showPopup)} id="info-icon">
//                 <i class="fa fa-info-circle"></i>
//             </button>
//             {showPopup && (
//                 <div className="popup">
//                     {props.children}
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useState } from "react";

export const InfoPopup = (props) => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <>
      <i className="fa fa-info-circle" onClick={() => setShowInfo(!showInfo)} />
      {showInfo && (
        <div className="info-popup">
          <p>{props.children}</p>
        </div>
      )}
    </>
  );
};

// export default InfoPopup;
