/// FIRST LESSON - Higher Order Components ///

// import React from "react";
// import { withPointlessHOC } from "./withPointlessHOC.jsx";
// import { withExtraPropAdded } from "./withExtraPropAdded.jsx";

// function App(props) {
//     console.log(props)
//     return (
//         <p>Hello world!</p>
//     );
// };
// const ExtraPropComponent = withExtraPropAdded(App)
// export default ExtraPropComponent;

/// END OF FIRST LESSON - Higher Order Components ///

/// CHALLENGE - HOC ///

// import React from "react";
// import { withFavoriteNumber } from "./withFavoriteNumber.jsx";

// function App(props) {
//     console.log(props)
//     return (
//         <p>{props.someGreeting} {props.favoriteNumber}</p>
//     );
// };
// const WithFavoriteNumber = withFavoriteNumber(App)
// export default WithFavoriteNumber;

/// END OF CHALLENGE - HOC ///


/// SECOND LESSON - Higher Order Components ///

import React from "react";
import Menu from "./Menu.jsx";
import Favorite from "./Favorite.jsx";

function App(props) {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
};
export default App;

/// SECOND LESSON - Higher Order Components ///