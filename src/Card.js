import React from "react";
import 'tachyons'


const Card = ({name, email, id }) => {
    return (
        <div className="bg-light-green center mw5 ba b--black-10 mv4 grow br3 bw shadow-5 ma4">
            <div className="pv2 ph3">
                <h1 className="f6 ttu tracked tc">Daily News Co.</h1>
            </div>
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
            <div className="pa3">
                <h2 className="tc">{name}</h2>
                <p className="gray db pv2 tc">{email}</p>
            </div>
        </div>
    )
}

export default Card