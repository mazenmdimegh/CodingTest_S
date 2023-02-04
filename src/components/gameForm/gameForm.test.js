import { render, screen, fireEvent } from '@testing-library/react';
import GameForm from './gameForm';
import userEvent from '@testing-library/user-event';


test('New Game Form', () => {
    render(<GameForm />);
    const NewGameBtn = screen.getByText("New Game");
    userEvent.click(NewGameBtn);
    const HomeTeam = screen.getByLabelText(/home Team/i);
    const Away = screen.getByLabelText(/away Team/i);
    expect(Away).toBeVisible();
    expect(HomeTeam).toBeVisible();
});

test('cancel Button', () => {
    render(<GameForm />);
    const NewGameBtn = screen.getByText("New Game");
    userEvent.click(NewGameBtn);
    const CancelBtn = screen.getByText("Cancel");
    userEvent.click(CancelBtn);
    const NewBtn = screen.getByText("New Game");
    expect(NewBtn).toBeInTheDocument();
});

test('submitting form', () => {
    render(<GameForm />);
    const NewGameBtn = screen.getByText("New Game");
    userEvent.click(NewGameBtn);
    const HomeTeam = screen.getByLabelText(/home Team/i);
    const Away = screen.getByLabelText(/away Team/i);
    const submitBtn = screen.getByText("Add");
    fireEvent.change(screen.getByTestId("selectHomeTeam"), {
        target: { value: "TestOption1" },
    });
    fireEvent.change(screen.getByTestId("selectAwayTeam"), {
        target: { value: "TestOption2" },
    });
    userEvent.click(submitBtn);
    const CancelBtn = screen.getByText("Cancel");
    userEvent.click(CancelBtn);
    const NewBtn = screen.getByText("New Game");
    expect(NewBtn).toBeInTheDocument();

});