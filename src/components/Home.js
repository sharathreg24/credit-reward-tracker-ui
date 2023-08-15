import { useState } from "react";
import AllCreditCardsAdded from "./AllCreditCardsAdded";
import GetStarted from "./GetStarted";

function Home() {

    const [atleastOneCardAdded, setatleastOneCardAdded] = useState(true);

    return atleastOneCardAdded ? <AllCreditCardsAdded /> : <GetStarted />;
}

export default Home;