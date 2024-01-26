import React, { useState } from "react";
import InputPlayers from "./Components/InputPlayers";
import Board from "./Components/Board";

const initialPlayers = ["Jose", "Lucia", "Mili", "Titi"];

const App = () => {
    const [players, setPlayers] = useState(initialPlayers);
    const [gameState, setGameState] = useState("players");

    const handlePlayers = (newPlayers) => {
        setPlayers(newPlayers);
        setGameState("playing");
    };

    return (
        <main className="dark container grid min-h-screen grid-rows-[auto,1fr,1fr,auto] bg-background px-4 font-sans antialiased">
            <header className="text-xl font-bold leading-[4rem]">
                Mahjong Score
            </header>
            <section className="py-8 grid">
                {gameState === "players" && (
                    <InputPlayers handlePlayers={handlePlayers}></InputPlayers>
                )}
                {gameState === "playing" && <Board players={players}></Board>}
            </section>
            <footer className="text-center leading-[4rem] text-muted-foreground">
                {new Date().getFullYear()} IdoSoft
            </footer>
        </main>
    );
};

export default App;
