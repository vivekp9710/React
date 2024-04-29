import React from 'react'
import Card from './Card'

let data = [
    {
        bike: "Glamour",
        num: 9710,
    },
    {
        bike: "splendor+",
        num: 2384,
    },
    {
        bike: "unicorn",
        num: 2455,
    },
];

export default function Map() {
    return (
        <>
            {data.map((e) => {
                return <Card bike={e.bike} num={e.num} />
            })}
        </>

    );
}
