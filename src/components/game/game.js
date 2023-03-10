import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Clock from "../../helpers/clock";
import "./game.scss"
import countries from"../../helpers/countries.json"
import { react } from "@babel/types";

const Game = (props) => {
    const { matchDetails, Update } = props;
    const [updating, setupdating] = React.useState(false);
    const [homeTeamcode,setHomeTeamCode]=React.useState()
    const [awayTeamcode,setAwayTeamCode]=React.useState()

    // useEffect(() => {
    //     console.log()
    //     console.log(homeTeamcode);
    //   }, [matchDetails]);
    const onFinish = () => {
        matchDetails.status = "Ended";
        Update(matchDetails)
    }
    const increaseHomeScore = (id) => {
        matchDetails.homeTeamScore = matchDetails.homeTeamScore + 1;
        Update(matchDetails)
    }
    const decreaseHomeScore = (id) => {
        matchDetails.homeTeamScore = matchDetails.homeTeamScore - 1;
        Update(matchDetails)
    }
    const increaseAwayScore = (id) => {
        matchDetails.awayTeamScore = matchDetails.awayTeamScore + 1;
        Update(matchDetails)

    }
    const decreaseAwayScore = (id) => {
        matchDetails.awayTeamScore = matchDetails.awayTeamScore - 1;
        Update(matchDetails)
    }
    const displayUpdateBtn = () => {
        setupdating(!updating);
    };
    
    return (<div>
        {
            matchDetails.status == "In Progress" && <div className="scoreboard__container">
                <div className="scoreboard__basics mb-05">

                    <span className="text-danger">
                    </span><Clock endClock={onFinish} />
                </div>
                <div className="scoreboard__teams">
                    <div className="scoreboard__team scoreboard__team--align-right mr-2">
                        <div className="scoreboard__badge ml-1">
                            <ReactCountryFlag countryCode={countries[countries.findIndex((country)=>country.name==matchDetails.homeTeam)].code} svg />
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
                            <ReactCountryFlag countryCode={countries[countries.findIndex((country)=>country.name==matchDetails.awayTeam)].code} svg />
                        </div>
                        <span className="scoreboard__name">{matchDetails.awayTeam}</span>
                    </div>
                </div>
                <div className="btnUpdateContainer">
                    <button className="button buttonUpdate" onClick={displayUpdateBtn}>Update score</button>
                    <button className="button buttonEnd" onClick={onFinish}>End Match</button>
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
                                            <ReactCountryFlag countryCode={countries[countries.findIndex((country)=>country.name==matchDetails.homeTeam)].code} svg />
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
                                            <ReactCountryFlag countryCode={countries[countries.findIndex((country)=>country.name==matchDetails.awayTeam)].code} svg />
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