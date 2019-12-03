import React from "react"
import GitCard from "./Card.js"

class CardData extends React.Component{
    componentDidMount(){
        console.log("component mounted")
    }
    render(){
        return(
            <>
            {this.props.users.map(item=>
            <GitCard key ={item.id} user = {item}/>
            )}
            </>
        )
    }
}

export default CardData