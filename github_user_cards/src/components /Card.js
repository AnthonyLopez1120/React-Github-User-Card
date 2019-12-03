import React from "react"

function GitCard (props){
    const user = props.user

    return (
        <div>
            <img src = {user.avatar_url} alt = "profile pic"/>
            <div>
                <p>{user.name}</p>
                <p>{user.login}</p>
                <p>{user.html_user}</p>
                <p>{user.locaton}</p>
                <p>{user.bio}</p>
            </div>
            <div>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
        </div>
    )
}   

export default GitCard