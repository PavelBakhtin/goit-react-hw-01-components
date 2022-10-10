import styled from "styled-components";

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
   
`
export const ProfileImg = styled.img`
    width: 100px;
    border-radius: 50%;
    border: 1px solid #f0f8ff;
`
export const StatsItems = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 10px;
    width: 70px;
    height: 100%;
    background-color:#f0f8ff;
    &:not(:last-child) {
        border-right-style: groove;
     }
`
export const Label = styled.span`
    font-size: 16px;
    color: grey;
`
export const Quantity = styled.span`
    font-weight: 500;
    font-size: 14px;
`

export const ProfileName = styled.p`
    font-weight: 700;
    font-size: 20px;
    padding-bottom:10px;
`
export const ProfileInfo = styled.p`
     padding-bottom:10px;
     color: grey;
`