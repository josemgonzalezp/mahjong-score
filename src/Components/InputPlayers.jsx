import React, { useState } from "react";

const InputPlayers = ({ handlePlayers }) => {
    const [players, setPlayers] = useState(["", "", "", ""]);
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
            <input
                placeholder="Jugador 1"
                type="text"
                className="rounded-md p-2 outline-none"
                value={players[0]}
                onChange={(e) => handleChange(e.target.value, 0)}
                onFocus={(e) => e.target.select()}
            />
            <input
                placeholder="Jugador 2"
                type="text"
                className="rounded-md p-2 outline-none"
                value={players[1]}
                onChange={(e) => handleChange(e.target.value, 1)}
                onFocus={(e) => e.target.select()}
            />
            <input
                placeholder="Jugador 3"
                type="text"
                className="rounded-md p-2 outline-none"
                value={players[2]}
                onChange={(e) => handleChange(e.target.value, 2)}
                onFocus={(e) => e.target.select()}
            />
            <input
                placeholder="Jugador 4"
                type="text"
                className="rounded-md p-2 outline-none"
                value={players[3]}
                onChange={(e) => handleChange(e.target.value, 3)}
                onFocus={(e) => e.target.select()}
            />
            <button
                className="rounded-md p-4 bg-blue-500 font-bold text-white text-xl"
                onClick={handleSubmit}
            >
                Siguiente
            </button>
        </div>
    );
};

export default InputPlayers;
