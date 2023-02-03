import React, { useState, useEffect } from "react";
import ScoreBoard from "../scoreBoard/scoreBoard";
import "./home.scss"
import GameForm from "../gameForm/gameForm";

const Home = () => {
    const [matchList, setMatchList] = React.useState([]);
  
    const NextUpdate = (match) => {
        let index = matchList.findIndex(match1 => match1.id == match.id);
        matchList[index] = match
        setMatchList([...matchList])
        console.log("Home updated",match)
        // NextUpdate(match)
    }
    const AddNewGame = (match) => {
        matchList.push(match)
        setMatchList([...matchList])
    }

    return (
        <div>
            <ScoreBoard matchList={matchList} NextUpdate={NextUpdate} />
            <GameForm NewGame={AddNewGame}/>
        </div>
    )
}
export default Home;