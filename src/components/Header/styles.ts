import styled from '@emotion/styled'

export const HeaderContent = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100vw;
    height: 160px;
    padding: 10px 50px 30px 50px;

    position: fixed;
    top: 0;
    background-color: #5a2d82;
    z-index: 999;

    @media(max-width: 414px) {
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        
    }
`;

export const DrawerButton = styled.div`
    display: none;
    align-items: center;
    padding: 30px;

    svg {
        color: white;
        font-size: 30px;
    }

    @media(max-width: 414px) {
        display: flex;
    }
`;

export const Backdrop = styled.div<{ hidden: boolean }>`
    display: ${props => !props.hidden ? 'none' : 'flex'};
    position: fixed;
    z-index: 2; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);  
`;

export const Drawer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    height: 100vh;
    width: 90%;
    padding: 25px;
    background-color: #5a2d82;

    h1 {
        font-size: 2.2rem;
        color: #FFF;
        font-weight: 700;
    }

    span {
        font-size: 0.95rem;
        color: #FFF;
        font-weight: 600;
        margin-bottom: 25px;
    }
`;

export const CloseDrawer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin: 25px;

    svg {
        color: #FFF;
        font-size: 50px;
    }
`;

export const TitleHeader = styled.h1`    
    color: #FFF;
    font-weight: 700;

    cursor: pointer;
    margin-right: 100px;

    @media(max-width: 414px) {
        margin: 0;
    }
`;

export const ItemsContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;

    width: 100%;
    height: 100%;

    @media(max-width: 414px) {
        display: none;
    }
`;

export const ButtonHeader = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;
    outline: none;
    border: none;

    cursor: pointer;

    span {
        font-size: 0.95rem;
        color: #FFF;
        font-weight: 600;

        margin-left: 10px;
    }

    svg {
        color: #FFF;
        font-size: 20px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
`;
