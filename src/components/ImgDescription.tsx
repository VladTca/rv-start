import React from "react";

type ImgDescriptionPropsType = {
    storyText: string;
}

export function ImgDescription(props: ImgDescriptionPropsType) {
    const ImgDescriptionStyle: React.CSSProperties = {
        width: "260px",
        height: "40px",
        color: "rgb(171, 179, 186)",
        fontFamily: "Inter, sans-serif",
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: "20px",
        letterSpacing: "0",
        textAlign: "left"

    };

    return <p style={ImgDescriptionStyle}>{props.storyText}</p>
}