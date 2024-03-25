import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import styled from "styled-components";
import s from "./components/card.module.css"
import dune from "./components/dune.png"

const Dune = () => {
    const MyPic = <img className="dune" src={dune} alt="Dune"/>
    return MyPic;
}


function App() {
  return (
      <div className="App">

          <Card />

      </div>
  );
}

export default App;


const Card = () => {
    return (
        <div className={s.card}>

<Dune/>

            {/*<img className="dune" src="/src/components/dune.png" alt="Dune"/>*/}
            <div className="card-content">

                <Imgtitle title='Headline'/>
                <ImgDescription storyText='Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.' />
                {/*<h2>Headline</h2>*/}
                {/*<p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>*/}

            </div>
            {/*<button className="firstBtn">See more</button>*/}
            {/*<button className="secondBtn">Save</button>*/}

            <StyledBtn>See more</StyledBtn>
            <StyledBtn>Save</StyledBtn>

        </div>
    );
}



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
function Imgtitle(props: ImgTitlePropsType) {
    return <Title>{props.title}</Title>;

}

type ImgDescriptionPropsType = {
    storyText: string;
}

function ImgDescription(props: ImgDescriptionPropsType) {
    const ImgDescriptionStyle:React.CSSProperties = {
        width: "260px",
        height: "40px",
        color: "rgb(171, 179, 186)",
        fontFamily:"Inter, sans-serif",
        fontSize:"12px",
        fontWeight:"500",
        lineHeight:"20px",
        letterSpacing:"0",
        textAlign: "left"

    };

    return <p style={ImgDescriptionStyle}>{props.storyText}</p>
}