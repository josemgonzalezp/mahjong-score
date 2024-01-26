import React from "react";

const InputPlayers = ({ handlePlayers }) => {
    const handleInput = () => {
        const newPlayers = ["player1", "player2", "player3", "player4"];
        handlePlayers(newPlayers);
    };
    return (
        <div className="flex flex-col gap-4">
            <h1>Ingrese Jugadores</h1>
            <label htmlFor="">Jugador 1:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
            />
            <label htmlFor="">Jugador 2:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
            />
            <label htmlFor="">Jugador 3:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
            />
            <label htmlFor="">Jugador 3:</label>
            <input
                type="text"
                className="rounded-md font-serif border border-black"
            />
            <button
                className="border-2 border-green-300 rounded-md px-2 bg-green-200"
                onClick={handleInput}
            >
                Siguiente
            </button>
        </div>
    );
};

export default InputPlayers;
