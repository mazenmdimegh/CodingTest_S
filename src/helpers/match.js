import { v4 } from "uuid";

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
export default Match;