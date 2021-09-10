import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --backgroundcolor: #F0F2F5;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --backgroundcolor: #F0F2F5;
    --shape: #ffffff;

}

*{
        margin: 0px;
        padding: 0px;
        box-sizing:border-box;
}

HTML {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }

    @media(max-width: 720px) {
        font-size: 87.5%;
    }
}

body {
    background: var(--backgroundcolor);
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

button {
    cursor: pointer;
}
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`
