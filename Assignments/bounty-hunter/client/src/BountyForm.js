import React, { useEffect, useState } from "react"

function BountyForm(props) {

    let emptyForm = {
        firstName: "",
        lastName: "",
        living: true,
        bountyAmount: 0,
        type: ""
    }

    const [input, setInput] = useState(emptyForm)

    function fillIn(event) {
        const { name, value } = event.target
        setInput(prevInput => ({ ...prevInput, [name]: value }))
        console.log(input)
    }

    function submitForm(e) {
        e.preventDefault()
        props.postBounty(input)
        setInput(emptyForm)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={input.firstName}
                    onChange={fillIn}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={input.lastName}
                    onChange={fillIn}
                />
                <input
                    type="boolean"
                    name="isAlive"
                    placeholder="Still Alive?"
                    value={input.isAlive}
                    onChange={fillIn}
                />
                <input
                    type="number"
                    name="bountyAmount"
                    placeholder="Bounty Amounty"
                    value={input.bountyAmount}
                    onChange={fillIn}
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Jedi or Sith"
                    value={input.type}
                    onChange={fillIn}
                />
                <button>Submit Bounty!</button>
            </form>
        </div>
    )
}

export default BountyForm