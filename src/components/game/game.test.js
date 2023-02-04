import { render, screen, fireEvent } from '@testing-library/react';
import Game from './game';
import userEvent from '@testing-library/user-event';
import Match from '../../helpers/match';


test('Game Display', () => {
    const match = new Match("AwayTeamTest", "HomeTeamTest");
    render(<Game matchDetails={match}/>);
    const text = screen.getByText(/AwayTeamTest/i);
    const text2 = screen.getByText(/HomeTeamTest/i);
    const text3 = screen.getAllByText(0);
    expect(text3[0]).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();    
});
