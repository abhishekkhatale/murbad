import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <div className="transaction-item">
      <div className="transaction-details">
        <div className="font-medium">{transaction.name}</div>
        <div className={`transaction-amount ${transaction.type}`}>
          {transaction.type === 'debit' ? '-' : '+'}
          {transaction.amount.toFixed(2)}
        </div>
        <div className="transaction-meta">
          <span>{transaction.paymentMethod}</span>
          <span>•</span>
          <span>{transaction.date}</span>
          <span>•</span>
          <span>{transaction.time}</span>
        </div>
      </div>
      <div className="transaction-actions">
        <button
          onClick={() => onDelete(transaction.id)}
          className="button secondary"
          aria-label="Delete transaction"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;