import React, { useState } from "react";
import InputPlayers from "./Components/InputPlayers";
import Board from "./Components/Board";
import ResetIcon from "./Components/Icons/ResetIcon";

const initialGameScore = Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => 0)
);

const App = () => {
    const [players, setPlayers] = useState();
    const [gameState, setGameState] = useState("players");
    const [gameScore, setGameScore] = useState(initialGameScore);

    const handlePlayers = (newPlayers) => {
        setPlayers(newPlayers);
        setGameState("playing");
    };

    const handleInputPoints = (points, cellEditing) => {
        if (points === "" || points === undefined) points = 0;

        const rowToEdit = parseInt(cellEditing.split("_")[0]);
        const cellToEdit = parseInt(cellEditing.split("_")[1]);
        const newScore = gameScore.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                if (cellIndex === cellToEdit && rowIndex === rowToEdit) {
                    return parseInt(points);
                } else {
                    return cell;
                }
            });
        });
        setGameScore(newScore);
    };

    const handleReset = () => {
        window.location.reload();
    };

    return (
        <main className="container grid min-h-screen grid-rows-[auto,1fr,auto] p-4 font-sans antialiased bg-purple-300">
            <header className="flex justify-between items-center">
                <span className="text-3xl font-bold">Mahjong Score</span>
                {gameState === "playing" && (
                    <div onClick={handleReset}>
                        <ResetIcon></ResetIcon>
                    </div>
                )}
            </header>
            <section className="py-4 grid">
                {gameState === "players" && (
                    <InputPlayers handlePlayers={handlePlayers}></InputPlayers>
                )}
                {gameState === "playing" && (
                    <Board
                        players={players}
                        gameScore={gameScore}
                        handleInputPoints={handleInputPoints}
                    ></Board>
                )}
            </section>
            <footer className="text-center leading-[4rem] text-muted-foreground">
                {new Date().getFullYear()} IdoSoft
            </footer>
        </main>
    );
};

export default App;
