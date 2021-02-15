import React, { useState } from "react"

function EditForm(props) {
    let emptyForm = {
        firstName: props.formData.firstName,
        lastName: props.formData.lastName,
        living: props.formData.living,
        bountyAmount: props.formData.bountyAmount,
        type: props.formData.type
    }

    const [input, setInput] = useState(emptyForm)

    function fillIn(event) {
        const { name, value } = event.target
        setInput(prevInput => ({ ...prevInput, [name]: value }))
        /*console.log(input)*/
    }

    function submitForm(e) {
        e.preventDefault()
        props.editBounty(input, props.formData._id)
        /*setInput("")*/
        props.toggle()
    }

    return (
        <div className="editForm">
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
                    type="text"
                    name="living"
                    placeholder="Still Alive?"
                    value={input.living}
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

export default EditForm