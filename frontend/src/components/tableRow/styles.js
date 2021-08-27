import styled from "styled-components";

export const Row = styled.tr`   
    background: ${props => (props.bgToggle % 2) ? "#fff" : "#ededed"};
    cursor: pointer;

    &:hover  {
        background: rgba(45, 72, 95, 0.76);
        color: #fff
    }
`