import PropTypes from 'prop-types'
import { Transaction } from "./Transaction"
import { TransactionHistoryTable } from './TransactionHistryStyled'
export const TransactionHistory = ({items}) => {
    return (
        <TransactionHistoryTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {
       items.map(item => (
        <tr key={item.id}>
            <Transaction item = {item}/>
        </tr>
       )) 
    }
  </tbody>
</TransactionHistoryTable>
    )
}
TransactionHistory.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}