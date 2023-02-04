import Home from "./home";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Live Football World Cup Score Board', () => {
    render(<Home />);
    const text = screen.getByText(/Live Football World Cup Score Board/i);
    expect(text).toBeInTheDocument();
});

test('New Game Button', () => {
    render(<Home />);
    // const NewGameBtn = screen.getByText("New Game");
    // userEvent.click(NewGameBtn);
    // const HomeTeam = screen.queryByLabelText(/Home Team/i);
    // const Away = screen.getByText(/Away Team/i);
    // expect(HomeTeam).toBeInTheDocument();
    // expect(Away).toBeInTheDocument();
});