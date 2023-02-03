import React, { useState, useEffect } from "react";
import Game from "../game/game";


const scoreBoard = (props) => {
    const { matchList ,NextUpdate} = props;
    const Update = (match) => {
        NextUpdate(match)
    }
    return (
        <div>
            <h1>Live Football World Cup Score Board</h1>
            {matchList
                .map((match) => {
                    return (
                        <div key={match.id} className="scoreboard">
                            <Game matchDetails={match} Update={Update} />
                        </div>
                    )
                })}
        </div>
    )
}
export default scoreBoard;