import styled from '@emotion/styled';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;

    svg {
        position: relative; 
        fill: black;
        left: 28px;
        font-size: 20px;
        vertical-align: middle;
        cursor: pointer;
    }
`;

export const SearchField = styled.input`
    background: #FFF;
    color: black;
    border: none;
    outline: none;
    font-size: 16px;
    padding-left: 32px;

    width: 100%;
    height: 50px;

    border-radius: 5px;
`;