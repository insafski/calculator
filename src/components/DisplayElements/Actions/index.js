import React from "react";
import Button from "../../Button";

export function ActionButtons({ setAction = () => Function, reset = () => Function}) {
    const actionButtons = [
        {
            text: "AC",
            onClick: reset,
        },
        {
            text: "*",
            onClick: () => setAction("*")
        },
        {
            text: "/",
            onClick: () => setAction("/")
        },
        {
            text: "-",
            onClick: () => setAction("-")
        },
        {
            text: "+",
            onClick: () => setAction("+")
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            {
                actionButtons.map(props => <Button {...props} />)
            }
        </div>
    );
}
