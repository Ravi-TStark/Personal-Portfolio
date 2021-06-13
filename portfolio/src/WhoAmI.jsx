import React from 'react'

function WhoAmI(props) {
    return (
        <div>
            <div className="whatAmI scrollSnap">
                <span>
                    {props.Value}
                </span>
                <img src={props.Icon} />
            </div>
        </div>
    )
}

export default WhoAmI
