import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(elem => (
          <TransactionHistoryItem key={elem.id} {...elem} />
        ))}
      </tbody>
    </table>
  );
};
