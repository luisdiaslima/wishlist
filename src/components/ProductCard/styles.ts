import styled from "@emotion/styled"

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: 250px;

    border: 1px solid #A3A3A3;
    border-radius: 5px;
    padding: 60px 25px 25px 25px;
    position: relative;
`;

export const WishThis = styled.div<{ isSelected?: boolean }>`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;

    top: -3px;
    left: 3px;
    width: 35px;
    height: 60px;
    border-radius: 5px;
    
    background-color: black;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    svg {
        color: ${props => props.isSelected ? "red" : "white" };
        font-size: 20px;
    }

    &::before, &::after {
        content: "";
        position: absolute;
        background-color: #fff;
        bottom: 0;
        height: 15px;
        width: 50%;
    }

    &::before {
        left: 0;
        transform: skewY(30deg);
        transform-origin: bottom left;
    }
    &::after {
        right: 0;
        transform: skewY(-30deg);
        transform-origin: bottom right;
    }
`;

export const RemoveThis = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;

    top: 0;
    right: 0;
    
    background-color: transparent;
    cursor: pointer;

    svg {
        color: black;
        font-size: 30px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    max-height: 300px;
    width: 100%;

    > img {
        margin-bottom: 10px;
    }
`;

export const ProductTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
`;

export const ProductPrice = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: #ebdb34;

    margin-top: auto;
`;