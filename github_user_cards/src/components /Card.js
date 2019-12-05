import React from "react"
import styled from "styled-components"

const CardDiv = styled.div`
    background-image: linear-gradient(to bottom right, white, lightgreen);
    width: 400px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid green;
    border-radius: 5px;
`

function GitCard (props){
    const user = props.user

    return (
        <CardDiv className = "card">
            <img src = {user.avatar_url} alt = "profile pic"/>
            <div>
                <p><span>Name:</span> {user.name}</p>
                <p><span>Github Handle:</span> {user.login}</p>
                <p>{user.html_user}</p>
                <p><span>Location:</span> {user.location}</p>
                <p><span>Bio:</span> {user.bio}</p>
            </div>
            <div>
                <p><span>Followers:</span> {user.followers}</p>
                <p><span>Following:</span> {user.following}</p>
            </div>
        </CardDiv>
    )
}   

export default GitCard