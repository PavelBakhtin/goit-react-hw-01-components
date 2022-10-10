import styled from "styled-components";
export const FriendCard = styled.li`
    display: flex;
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 10px;
    margin-bottom: 5px;
    padding: 10px;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    gap: 20px;
   
`
export const Status = styled.span`
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background-color: ${({online}) => online ? 'green' : 'red'
};
    border-radius: 50%; 

`
export const FriendName = styled.p`
    font-size: 16px;
    font-weight: 500;
`
