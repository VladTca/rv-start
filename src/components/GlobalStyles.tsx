import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*:before,
*::after{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
 
}
body{
    display: flex;
    // background-color: ${myTheme.colors.backWall};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    justify-content: center;
    height: 100vh;
}


`;
