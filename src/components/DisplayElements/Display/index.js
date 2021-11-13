import React from "react";

export function Display({ value }) {
    return (
        <div 
            style={{
                width: "100%",
                border: "1px solid #000",
                padding: "10px",
                textAlign: "right",
                height: 20,
                marginBottom: 20
            }}
        >
            {value}
        </div>
    )
}