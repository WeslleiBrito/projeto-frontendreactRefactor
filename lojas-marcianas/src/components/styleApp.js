import styled from "styled-components";
import backgroundPage from "../assets/img/background-page.svg"

export const ContainerApp = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    background-image: url(${backgroundPage});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`