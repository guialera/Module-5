import React, { useEffect, useState } from "react"

import EditForm from "./EditForm"

function BountyList(props) {
    const [alive, setAlive] = useState("")
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        if (props.bounty.living === true) {
            setAlive("Alive!")
        } else if (props.bounty.living === false) {
            setAlive("Dead!")
        }
    }, [])

    function formToggle() {
        setShowForm(prevShowForm => !prevShowForm)
    }

    return (
        <div>
            <h1 id={props.bounty._id}>{props.bounty.firstName} {props.bounty.lastName}</h1>
            <p>Still Alive: {alive}</p>
            <p>Bounty Amount: ${props.bounty.bountyAmount}</p>
            <p>Jedi or Sith: {props.bounty.type}</p>
            <button onClick={() => formToggle()}>Edit Bounty</button>
            <button onClick={() => props.deleteBounty(props.bounty._id)}>Delete Bounty</button>
            <div style={{ display: showForm ? "block" : "none" }}>
                <EditForm formData={props.bounty} editBounty={props.editBounty} toggle={formToggle} />
            </div>
        </div>
    )
}

export default BountyList