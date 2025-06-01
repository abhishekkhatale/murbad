import React from 'react';
import TransactionItem from './TransactionItem';

const ViewTransactions = ({ transactions, onDelete }) => {
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">All Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet. Add your first transaction!</p>
      ) : (
        <div className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewTransactions;