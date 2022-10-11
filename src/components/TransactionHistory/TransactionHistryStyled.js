import styled from "styled-components";

export const TransactionHistoryTable = styled.table`
    margin:5px;
    width: 50%;
    border: 1px solid #f0f8ff;
    
    
& th {
    text-align: center;
    padding: 10px;
    background-color: lightblue;
    color: white;

    
}
  & tr {
   
    text-align: center;
   
    
  }
  & td {
   
    padding:5px;
    border: 0px solid #f0f8ff;
  }
& tr:nth-child(even) {
    
    background-color: #f0f8ff;
}
`


