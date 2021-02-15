import React, { useEffect, useState } from "react"

import EditForm from "./EditForm"

function BountyList(props) {
    const [showForm, setShowForm] = useState(false)

    function formToggle() {
        setShowForm(prevShowForm => !prevShowForm)
    }

    return (
        <div className="bountyList">
            <h1 id={props.bounty._id}>{props.bounty.firstName} {props.bounty.lastName}</h1>
            <p style={{ display: props.bounty.living === "true" ? "block" : "none" }}>Still Alive: Alive!</p>
            <p style={{ display: props.bounty.living === "false" ? "block" : "none" }}>Still Alive: Dead!</p>
            <p>Bounty Amount: ${props.bounty.bountyAmount}</p>
            <p>Jedi or Sith: {props.bounty.type}</p>
            <button className="editButton" onClick={() => formToggle()}>Edit Bounty</button>
            <button className="deleteButton" onClick={() => props.deleteBounty(props.bounty._id)}>Delete Bounty</button>
            <div style={{ display: showForm ? "block" : "none" }}>
                <EditForm formData={props.bounty} editBounty={props.editBounty} toggle={formToggle} />
            </div>
        </div>
    )
}

export default BountyList