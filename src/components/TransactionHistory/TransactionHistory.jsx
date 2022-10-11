import PropTypes from 'prop-types'
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
       items.map((item) => (
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
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
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string,
        })
    )
}