import React, { useState } from "react";

const InputPlayers = ({ handlePlayers }) => {
    const [players, setPlayers] = useState([
        "player1",
        "player2",
        "player3",
        "player4",
    ]);
    const handleSubmit = () => {
        handlePlayers(players);
    };
    const handleChange = (val, index) => {
        const newPlayers = players.map((player, playerIndex) => {
            if (playerIndex === index) {
                return val;
            } else {
                return player;
            }
        });
        setPlayers(newPlayers);
    };
    return (
        <div className="flex flex-col gap-4">
            <h1>Ingrese Jugadores</h1>
            <label htmlFor="">Jugador 1:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
                value={players[0]}
                onChange={(e) => handleChange(e.target.value, 0)}
                onFocus={(e) => e.target.select()}
            />
            <label htmlFor="">Jugador 2:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
                value={players[1]}
                onChange={(e) => handleChange(e.target.value, 1)}
                onFocus={(e) => e.target.select()}
            />
            <label htmlFor="">Jugador 3:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
                value={players[2]}
                onChange={(e) => handleChange(e.target.value, 2)}
                onFocus={(e) => e.target.select()}
            />
            <label htmlFor="">Jugador 4:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
                value={players[3]}
                onChange={(e) => handleChange(e.target.value, 3)}
                onFocus={(e) => e.target.select()}
            />
            <button
                className="border-2 rounded-md p-4 bg-green-400 font-bold text-white"
                onClick={handleSubmit}
            >
                Siguiente
            </button>
        </div>
    );
};

export default InputPlayers;
