import React from 'react'

function Skill(props) {
    return (
        <div className="skill">
            <img src={props.Icon} />
            <span>{props.title}</span>
        </div>
    )
}

export default Skill
