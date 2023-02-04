import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Match from '../../helpers/match';
import ScoreBoard from './scoreBoard';


test('ScoreBoard Display', () => {
    const match1 = new Match("AwayTeamTest1", "HomeTeamTest1");
    const match2 = new Match("AwayTeamTest2", "HomeTeamTest2");
    render(<ScoreBoard matchList={[match1,match2]}/>);
    const text = screen.getByText(/AwayTeamTest1/i);
    const text2 = screen.getByText(/HomeTeamTest1/i);
    const text3 = screen.getByText(/AwayTeamTest2/i);
    const text4 = screen.getByText(/HomeTeamTest2/i);
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();   
    expect(text3).toBeInTheDocument();
    expect(text4).toBeInTheDocument();    
});
