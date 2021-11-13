import React from "react";
import Button from "../../Button";

export function NumberButtons({setNumber = () => Function}) {
    const numberButtons = [];

    for(let i = 0; i <= 9; i++) {
        numberButtons.push({
            text: i,
            onClick: () => setNumber(i)
        });
    }

    return (
        <div>
            {
                numberButtons.map(props => <Button {...props} />)
            }
        </div>
    )
}