import styled from "@emotion/styled"

export const Container = styled.div`
    display: grid;

    height: 100vh;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(4, 1fr); 

    grid-gap: 30px;

    @media(max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr); 
        grid-template-rows: repeat(3, 1fr); 
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(2, 1fr); 
    }

    @media(max-width: 414px) {
        grid-template-columns: repeat(1, 1fr); 
        grid-template-rows: repeat(1, 1fr); 
    }
`;