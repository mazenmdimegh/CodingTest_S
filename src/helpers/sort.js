const Sort =(List)=>{
    List.sort((a, b) => {
        const totalScoreA = a.awayTeamScore + a.homeTeamScore;
        const totalScoreB = b.awayTeamScore + b.homeTeamScore;
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (totalScoreA === totalScoreB) {
            return dateB - dateA;
        }
        return totalScoreB - totalScoreA;
    })
    return List;
}
export default Sort;
