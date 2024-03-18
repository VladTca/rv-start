import styled from "styled-components";
import {myTheme} from "./Theme.styled";
// import { MyAnimation } from "./styles/animations/Animations";

export const StyledBtn = styled.button`
   
    width: 86px;
    height: 30px;
    margin-left: 20px;
    margin-right: 12px;
    border-radius: 5px;
    background-color: rgb(78, 113, 254);
    color: rgb(255, 255, 255);
    font-family: Inter , sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
    text-align: center;
    border:1px solid rgb(78, 113, 254);
    

  &:hover {
    background-color: yellowgreen;
  }

  &:last-child {
   margin: 0;
      background-color:rgb(255, 255, 255) ;
      color: rgb(78, 113, 254);
  }
    &:last-child:hover {
        background-color:  ${myTheme.colors.primary};
    }
    
`;
// export const SuperBtn = styled(StyledBtn)`
//   border-radius: 5px;
//   background-color: #e0e04f;
//   color: black;
//   &:hover {
//     animation: ${MyAnimation} 2s ease-in-out infinite;
//   }
// `;
