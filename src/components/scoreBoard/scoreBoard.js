import React, { useState, useEffect } from "react";


const scoreBoard = (props) => {
    const { matchList } = props;

    return (<div>
        {matchList
            .map((match) => {
                return (
                    <div key={match.id} className="scoreboard">
                        <Game details={match}/>
                    </div>
                )
            })}
    </div>)
}
export default scoreBoard;