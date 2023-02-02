import React, { useState, useEffect } from "react";


const Game = (props) => {
    const { matchDetails } = props;

    return (<div>
        {
            matchDetails.status == "In Progress" && <div className="scoreboard__container">
                <div className="scoreboard__basics mb-05">

                    <span className="text-danger">
                    </span><Clock endClock={() => onFinish(matchDetails.id)} />
                </div>
                <div className="scoreboard__teams">
                    <div className="scoreboard__team scoreboard__team--align-right mr-2">
                        <div className="scoreboard__badge ml-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png" alt="Manchester United" />
                        </div>
                        <span className="scoreboard__name">{matchDetails.homeTeam}</span>
                    </div>
                    <div className="scoreboard__result">
                        <span className="scoreboard__result-home">{matchDetails.homeTeamScore}</span>
                        <span className="scoreboard__result-separator">:</span>
                        <span className="scoreboard__result-home">{matchDetails.awayTeamScore}</span>
                    </div>
                    <div className="scoreboard__team scoreboard__team--align-left ml-2">
                        <div className="scoreboard__badge mr-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png" alt="Liverpool" />
                        </div>
                        <span className="scoreboard__name">{matchDetails.awayTeam}</span>
                    </div>
                </div>
                <div className="btnUpdateContainer">
                    <button className="button buttonUpdate" onClick={displayUpdateBtn}>Update score</button>
                </div>
            </div>
        }
    </div>)
}
export default Game;