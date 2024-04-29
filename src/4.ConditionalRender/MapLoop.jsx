import React from "react";

export default function MapLoop() {
    let cars = ["creta", "amaze", "xuv700"];
    let data = [
        { cars: "creta", no: 6335 },
        { cars: "amaze", no: 9710 },
        { cars: "xuv700", no: 2384 },
    ];
    return (
        <div>
            {cars.map((e) => {
                return <h1>{e}</h1>;
            })}

            {data.map((e) => {
                return (
                    <div>
                        <h1>cars : {e.cars}</h1>
                        <h1>no : {e.no}</h1>
                    </div>
                );
            })}
        </div>
    );
}
