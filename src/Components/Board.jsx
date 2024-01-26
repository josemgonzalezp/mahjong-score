import React, { useState, useEffect } from "react";
import InputPoints from "./InputPoints";

const initialGameScore = Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => 0)
);

const Board = ({ players }) => {
    const [cellEditing, setCellEditing] = useState("");
    const [gameScore, setGameScore] = useState(initialGameScore);

    useEffect(() => {
        let totalPoints = Array.from({ length: 4 }, () => 0);
        for (let i = 0; i < gameScore.length; i++) {
            totalPoints[0] += gameScore[i][0];
            totalPoints[1] += gameScore[i][1];
            totalPoints[2] += gameScore[i][2];
            totalPoints[3] += gameScore[i][3];
        }
    }, [gameScore]);

    const handleInputPoints = (points) => {
        console.log(points);
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
        console.log(newScore);
        setGameScore(newScore);
        setCellEditing("");
    };

    return (
        <div className="grid gap-4">
            <table className="w-full rounded-md">
                <thead>
                    <tr className="h-20">
                        <th
                            className="border border-black"
                            style={{ width: "25%" }}
                        >
                            {players[0]}
                        </th>
                        <th
                            className="border border-black"
                            style={{ width: "25%" }}
                        >
                            {players[1]}
                        </th>
                        <th
                            className="border border-black"
                            style={{ width: "25%" }}
                        >
                            {players[2]}
                        </th>
                        <th
                            className="border border-black"
                            style={{ width: "25%" }}
                        >
                            {players[3]}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {gameScore.map((row, rowIndex) => {
                        return (
                            <tr key={`${rowIndex}`} className="h-20">
                                {gameScore[rowIndex].map((col, colIndex) => {
                                    return (
                                        <td
                                            className="border border-black text-center"
                                            key={`${rowIndex}_${colIndex}`}
                                            onClick={() =>
                                                setCellEditing(
                                                    `${rowIndex}_${colIndex}`
                                                )
                                            }
                                        >
                                            {col}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {cellEditing != "" && (
                <InputPoints handleInputPoints={handleInputPoints} />
            )}
        </div>
    );
};

export default Board;
