import React, { useState, useEffect } from "react";
import Game from "../game/game";


const scoreBoard = (props) => {
    const { matchList ,NextUpdate} = props;
    const Update = (match) => {
        // let index = matchList.findIndex(match => match.id == id);
        // matchList[index] = match
        // setMatchList([...matchList])
        // console.log("updated",match)
        NextUpdate(match)
    }
    return (
        <div>
            <h1>Live Football World Cup Score Board</h1>
            {matchList
                .map((match) => {
                    return (
                        <div key={match.id} className="scoreboard">
                            {/* <h1>{match.id}</h1> */}
                            <Game matchDetails={match} Update={Update} />
                        </div>
                    )
                })}
        </div>
    )
}
export default scoreBoard;