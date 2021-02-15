import React, { useState, useEffect } from "react"

import axios from "axios"

import BountyForm from "./BountyForm"

import BountyList from "./BountyList"

function App() {
    const [bountyList, setBountyList] = useState([])

    useEffect(() => {
        loadBountyList()
    }, [])

    function loadBountyList() {
        axios.get("/bounties")
            .then(response => setBountyList(response.data))
            .catch(error => console.log(error))
    }

    function postBounty(bounty) {
        /*console.log(bounty)*/
        axios.post("/bounties", bounty)
            .then(response => {
                setBountyList(prevBountyList => [...prevBountyList, response.data])
            })
            .catch(error => console.log(error))
    }

    function editBounty(editForm, bountyId) {
        /*console.log(editForm)
        console.log(bountyId)*/
        axios.put(`/bounties/${bountyId}`, editForm)
            .then(response => setBountyList(response.data))
            .catch(error => console.log(error))
    }

    function deleteBounty(bountyId) {
        /*console.log(bountyId)*/
        axios.delete(`/bounties/${bountyId}`)
            .then(response => setBountyList(response.data))
            .catch(error => console.log(error))
    }

    let list = bountyList.map(each => <BountyList bounty={each} key={each._id} editBounty={editBounty} deleteBounty={deleteBounty} />)

    return (
        <div>
            <BountyForm postBounty={postBounty} />
            {list}
        </div>
    )
}

export default App