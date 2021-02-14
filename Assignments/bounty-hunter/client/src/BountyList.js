import React, { useEffect, useState } from "react"

function BountyList(props) {
    const [alive, setAlive] = useState("")

    useEffect(() => {
        if (props.bounty.living === true) {
            setAlive("Alive!")
        } else if (props.bounty.living === false) {
            setAlive("Dead!")
        }
    }, [])

    return (
        <div>
            <h1 id={props.bounty._id}>{props.bounty.firstName} {props.bounty.lastName}</h1>
            <p>Still Alive: {alive}</p>
            <p>Bounty Amount: ${props.bounty.bountyAmount}</p>
            <p>Jedi or Sith: {props.bounty.type}</p>
        </div>
    )
}

export default BountyList