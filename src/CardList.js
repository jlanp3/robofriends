import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {

    const user = robots.map((rb, index) => {
        return <li key={`robots[${index}].id`}>{<Card id={robots[index].id} name={robots[index].name} email={robots[index].email}/>}</li>
    })

    return(
        <div>
            <ul>
                {user}
            </ul>
        </div>
    )
}

export default CardList