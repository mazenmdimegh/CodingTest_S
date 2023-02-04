import { render, screen, fireEvent } from '@testing-library/react';
import Game from './game';
import userEvent from '@testing-library/user-event';
import Match from '../../helpers/match';


test('New Game Form', () => {
    const match = new Match("AwayTeamTest", "HomeTeamTest");
    render(<Game matchDetails={match}/>);
    
    const text = screen.getByText(/AwayTeamTest/i);
    const text2 = screen.getByText(/HomeTeamTest/i);
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();      
    // const NewGameBtn = screen.getByText("New Game");
    // userEvent.click(NewGameBtn);
    // const HomeTeam = screen.getByLabelText(/home Team/i);
    // const Away = screen.getByLabelText(/away Team/i);
    // expect(Away).toBeVisible();
    // expect(HomeTeam).toBeVisible();
});