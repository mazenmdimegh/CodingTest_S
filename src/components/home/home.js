import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ScoreBoard from "../scoreBoard/scoreBoard";
import countries from"../../helpers/countries.json"
import { v4 } from "uuid";
import "./home.scss"
class Match {
    constructor(homeTeam, awayTeam) {
        this.id = v4();
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeTeamScore = 0;
        this.awayTeamScore = 0;
        this.status = "In Progress";
        this.date = Date.now();
    }
}

const Home = () => {
    const [matchList, setMatchList] = React.useState([]);
    const [Adding, setAdding] = React.useState(false);
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();

    const displayNewGameBtn = () => {
        setAdding(!Adding);
    };

    const Submit = async (data) => {
        console.log("submitted")
        const match1 = new Match(getValues("awayTeam"), getValues("homeTeam"));
        matchList.push(match1)
        setMatchList([...matchList])
        console.log(matchList)
        setValue("awayTeam", "")
        setValue("homeTeam", "")
        setAdding(!Adding);
    }
    return (
        <div>
            <ScoreBoard matchList={matchList}/>
            {!Adding && <button className="button button1" onClick={displayNewGameBtn}>New Game</button>}
            {Adding && <button className="button buttonCancel" onClick={displayNewGameBtn}>Cancel</button>}
            {Adding &&
                <form onSubmit={handleSubmit(Submit)}>
                    <div className="form-wrapper">
                        <div className="job-text1 coll">
                            <label className="Label">Home Team:</label>
                            <select id="country" className={
                                errors.lastname ? "errorInput job-text-input1" : "job-text-input1"
                            }
                                placeholder=" awayTeam *"
                                name="awayTeam"
                                {...register('awayTeam', { required: true })}>
                                <option >country</option>
                                {countries.map(d => ( <option key={d.code} value={d.name}>{d.name}</option>))} 
                            </select>
                            {errors.homeTeam && <p className="error">*ce champ est obligatoire</p>}
                        </div>
                        <div className="coll collRight">
                            <label className="Label">Away Team:</label>

                            <select id="country" className={
                                errors.awayTeam ? "errorInput job-text-input" : "job-text-input"
                            }
                                placeholder=" homeTeam *"
                                name="homeTeam"
                                {...register('homeTeam', { required: true })}>
                                <option>country</option>
                                {countries.map(d => ( <option key={d.code} value={d.name}>{d.name}</option>))} 
                            </select>
                            {errors.homeTeam && <p className="error">*ce champ est obligatoire</p>}
                        </div>
                        <button className="button button2" type="submit">
                            Add
                        </button>
                    </div>
                </form>
            }

        </div>
    )
}
export default Home ;