import React, { useEffect, useState } from "react";

const calculatePoints = (base, doubles) => {
    const bythree = base * 3;
    const pow = Math.pow(2, doubles);
    const result = bythree * pow;
    return result;
};

const PointsTable = ({ handleTableChange }) => {
    const [base, setBase] = useState(0);
    const [doubles, setDoubles] = useState(0);

    const handleChange = (base, doubles) => {
        setBase(base);
        setDoubles(doubles);

        const realBase = 22 + base * 2;
        const result = calculatePoints(realBase, doubles);
        handleTableChange(result);
    };

    useEffect(() => {
        handleTableChange(calculatePoints(22, doubles));
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="">
                Dobles: <b>{doubles === 0 ? "X3" : doubles}</b>
            </label>
            <input
                type="range"
                min="0"
                max="7"
                step="1"
                value={doubles}
                onChange={(e) => handleChange(base, e.target.value)}
            />
            <label htmlFor="">
                Base: <b>{22 + base * 2}</b>
            </label>
            <input
                type="range"
                min="0"
                max="24"
                step="1"
                value={base}
                onChange={(e) => handleChange(e.target.value, doubles)}
            />
        </div>
    );
};

export default PointsTable;
