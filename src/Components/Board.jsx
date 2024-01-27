import React, { useState, useEffect } from "react";
import InputPoints from "./InputPoints";

const Board = ({ players, gameScore, handleInputPoints }) => {
    const [cellEditing, setCellEditing] = useState("");

    const getTotalPoints = (player) => {
        let totalPoints = 0;

        for (let i = 0; i < gameScore.length; i++) {
            totalPoints += gameScore[i][player];
        }

        return totalPoints;
    };

    const handleInput = (points) => {
        handleInputPoints(points, cellEditing);
        setCellEditing("");
    };

    return (
        <div className="grid gap-4 mt-8">
            <table className="w-full rounded-md h-72">
                <thead>
                    <tr className="font-bold">
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
                    <tr key={`Totals`} className="h-20">
                        <td
                            className="border border-black text-center font-bold"
                            key={`Totals_0`}
                        >
                            {getTotalPoints(0)}
                        </td>
                        <td
                            className="border border-black text-center font-bold"
                            key={`Totals_1`}
                        >
                            {getTotalPoints(1)}
                        </td>
                        <td
                            className="border border-black text-center font-bold"
                            key={`Totals_2`}
                        >
                            {getTotalPoints(2)}
                        </td>
                        <td
                            className="border border-black text-center font-bold"
                            key={`Totals_3`}
                        >
                            {getTotalPoints(3)}
                        </td>
                    </tr>
                </tbody>
            </table>
            {cellEditing != "" && (
                <InputPoints handleInputPoints={handleInput} />
            )}
        </div>
    );
};

export default Board;
