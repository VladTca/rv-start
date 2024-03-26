import styled from "styled-components";
import React from "react";

type ImgTitlePropsType = {
    title: string;
};
const Title = styled.h2`

    width: 70px;
    height: 19px;

    color: rgb(0, 0, 0);

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 19px;
`;

export function Imgtitle(props: ImgTitlePropsType) {
    return <Title>{props.title}</Title>;

}