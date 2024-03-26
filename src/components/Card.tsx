import s from "./card.module.css";
import { Dune } from "./Dune";
import { Imgtitle } from "./Title";
import { ImgDescription } from "./ImgDescription";
import { StyledBtn } from "./Button.styled";
import React from "react";

export const Card = () => {
  return (
    <div className={s.card}>
      <Dune />

      {/*<img className="dune" src="/src/components/dune.png" alt="Dune"/>*/}
      <div className="card-content">
        <Imgtitle title="Headline" />
        <ImgDescription storyText="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen." />
        {/*<h2>Headline</h2>*/}
        {/*<p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>*/}
      </div>
      {/*<button className="firstBtn">See more</button>*/}
      {/*<button className="secondBtn">Save</button>*/}

      <StyledBtn>See more</StyledBtn>
      <StyledBtn>Save</StyledBtn>
    </div>
  );
};
