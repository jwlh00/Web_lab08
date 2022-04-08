import React, { useState} from "react";
import "./board.css"
import back_img from "./public/card_back.png"


class Board extends React.Component{

    createSquare(){
        return <Square/>
    }

    render(){
        return <>
            <div className="row1">
                {this.createSquare()}
                {this.createSquare()}
                {this.createSquare()}
                {this.createSquare()}
                {this.createSquare()}
                {this.createSquare()}
                {this.createSquare()}
                {this.createSquare()}
            </div>
            <div className="count">
                <h1>Intento numero 0</h1>
            </div>  
        </>
    }

}

class Square extends React.Component{
    render(){
        return <img className = "back" src= {back_img} alt="back_card"></img>
    }
}

export default Board;