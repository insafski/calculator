import React from "react";

export default function Button({ text = "", onClick = () => Function, ...rest }) {
    return <button
                onClick={onClick}
                className={"base-button"}
                {...rest}
            >
                {text}
            </button>
}