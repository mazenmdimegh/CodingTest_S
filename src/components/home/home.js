import React, { useState, useEffect } from "react";


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

const home = () => {

    return (
        <div>
            <ScoreBoard/>
        </div>
    )
}