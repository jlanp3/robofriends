import React from "react";

const Card = () => {
    return (
        <div className="bg-white center mw5 ba b--black-10 mv4">
            <div class="pv2 ph3">
                <h1 class="f6 ttu tracked">Daily News Co.</h1>
            </div>
            <img src="https://robohash.org/test?200x200" alt="Robot" />
            <div class="pa3">
                <h2>Jane Doe</h2>
                <p className="gray db pv2">jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card