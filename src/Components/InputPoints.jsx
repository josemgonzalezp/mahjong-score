import React, { useState } from "react";
import PointsTable from "./PointsTable";

const InputPoints = ({ handleInputPoints }) => {
    const [points, setPoints] = useState("");

    const handleClick = () => {
        handleInputPoints(points);
    };

    const handleTableChange = (points) => {
        setPoints(points);
    };

    return (
        <div className="flex flex-col gap-4 border-2 border-black p-4 rounded-md">
            <h2 className="mx-auto">Ingrese Puntos</h2>
            <input
                autoFocus
                onChange={(e) => setPoints(e.target.value)}
                value={points}
                type="number"
                className="rounded-md text-center font-serif border border-black"
            />
            <PointsTable handleTableChange={handleTableChange} />
            <button
                onClick={handleClick}
                className="border-2 border-green-300 rounded-md px-2 bg-green-200"
            >
                Ingresar
            </button>
        </div>
    );
};
export default InputPoints;
