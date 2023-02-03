import React, { useState, useEffect } from "react";
import Clock from "../../helpers/clock";


const Game = (props) => {
    const { matchDetails } = props;
    const [updating, setupdating] = React.useState(false);

    const onFinish = (id) => {
        // console.log("Time's Up!", id);
        // let Game = matchList.find(match=>match.id==id)
        // let index = matchList.findIndex(match=>match.id==id);
        // Game.status = "Ended";
        // matchList[index] = Game;
        // setMatchList([...matchList])
    }
    const increaseHomeScore = (id) => {
        // let Game = matchList.find(match=>match.id==id)
        // let index = matchList.findIndex(match=>match.id==id);
        // Game.homeTeamScore = matchList[index].homeTeamScore + 1;
        // matchList[index] = Game;
        // setMatchList([...matchList])
        // // console.log("finale matchList", matchList)
        // Sort();

    }
    const decreaseHomeScore = (id) => {
        // let Game = matchList.find(match=>match.id==id)
        // let index = matchList.findIndex(match=>match.id==id);
        // Game.homeTeamScore = matchList[index].homeTeamScore - 1;
        // matchList[index] = Game;
        // setMatchList([...matchList])
        // Sort();

    }
    const increaseAwayScore = (id) => {
        // let Game = matchList.find(match=>match.id==id)
        // let index = matchList.findIndex(match=>match.id==id);
        // Game.awayTeamScore = matchList[index].awayTeamScore + 1;
        // matchList[index] = Game;
        // setMatchList([...matchList])
        // // console.log("finale matchList", matchList)
        // Sort();

    }
    const decreaseAwayScore = (id) => {
        // let Game = matchList.find(match=>match.id==id)
        // let index = matchList.findIndex(match=>match.id==id);
        // Game.awayTeamScore = matchList[index].awayTeamScore - 1;
        // matchList[index] = Game;
        // setMatchList([...matchList])
        // Sort();
    }
    const displayUpdateBtn = () => {
        setupdating(!updating);
    };
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
                {updating &&
                <div className="popup-container">
                    <div>
                        <div className="popup-wrapper" >
                            <button className="submit-btn" onClick={displayUpdateBtn}>
                                X
                            </button>
                            <div>
                                <button className="Plus" onClick={(e) => increaseHomeScore(matchDetails.id)}> + </button>
                                <button className="Plus" onClick={(e) => increaseAwayScore(matchDetails.id)}> + </button>
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
                            <div className="btnContainer">
                                {matchDetails.homeTeamScore === 0 && <div className="emptyspace"></div>}
                                {matchDetails.homeTeamScore !== 0 && <button className="Plus" onClick={(e) => decreaseHomeScore(matchDetails.id)}> - </button>}
                                {matchDetails.awayTeamScore === 0 && <div className="emptyspace"></div>}
                                {matchDetails.awayTeamScore !== 0 && <button className="Plus" onClick={(e) => decreaseAwayScore(matchDetails.id)}> - </button>}

                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        }
    </div>)
}
export default Game;