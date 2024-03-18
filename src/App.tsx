import React from 'react';
import './App.css';
import {StyledBtn} from "./components/Button.styled";
import styled from "styled-components";



function App() {
  return (
      <div className="App">

              {/*<StyledBtn>Hello</StyledBtn>*/}
              {/*<StyledBtn>Hello</StyledBtn>*/}
<Card />

      </div>
  );
}

export default App;


const Card = () => {
    return (
        <div className="card">
            <img className="dune" src="./assets/dune.png" alt="Dune" />
            <div className="card-content">
                <h2>Headline</h2>
                <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                <div className="buttons">
                    <button>See more</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    );
}