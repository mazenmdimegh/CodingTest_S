import React, { useState, useEffect } from "react";
import ScoreBoard from "../scoreBoard/scoreBoard";
import "./home.scss"
import GameForm from "../gameForm/gameForm";

const Home = () => {
    const [matchList, setMatchList] = React.useState([]);
    useEffect(() => {
        // setMatchList( matchList.sort((a, b) => {
        //     const totalScoreA = a.awayTeamScore + a.homeTeamScore;
        //     const totalScoreB = b.awayTeamScore + b.homeTeamScore;
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);
    
        //     if (totalScoreA === totalScoreB) {
        //         return dateB - dateA;
        //     }
        //     return totalScoreB - totalScoreA;
        // }))
      }, [matchList]);

    const NextUpdate = (match) => {
        let index = matchList.findIndex(match1 => match1.id == match.id);
        matchList[index] = match
        setMatchList([...matchList])
        Sort();
        setMatchList([...matchList])
    }
    const AddNewGame = (match) => {
        matchList.push(match)
        setMatchList([...matchList])
    }
    const Sort =()=>{
        setMatchList( matchList.sort((a, b) => {
            const totalScoreA = a.awayTeamScore + a.homeTeamScore;
            const totalScoreB = b.awayTeamScore + b.homeTeamScore;
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
    
            if (totalScoreA === totalScoreB) {
                return dateB - dateA;
            }
            return totalScoreB - totalScoreA;
        }))
    }
    return (
        <div>
            <ScoreBoard matchList={matchList} NextUpdate={NextUpdate} />
            <GameForm NewGame={AddNewGame}/>
        </div>
    )
}
export default Home;