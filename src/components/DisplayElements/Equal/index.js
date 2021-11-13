import React from "react";
import Button from "../../Button";

export function Equal({ calculate = () => Function}) {
    return (
        <div>
            <Button text={"="} onClick={calculate} />
        </div>
    )
}