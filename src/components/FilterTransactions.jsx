import React, { useState } from 'react';
import TransactionItem from './TransactionItem';

const FilterTransactions = ({ transactions, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Filter Transactions</h2>
      <div className="form-group mb-4">
        <label htmlFor="search" className="label">
          Search by Name
        </label>
        <input
          type="text"
          id="search"
          className="input"
          placeholder="Enter transaction name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredTransactions.length === 0 ? (
        <p>No transactions found matching your search.</p>
      ) : (
        <div className="transaction-list">
          {filteredTransactions.map((transaction) => (
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

export default FilterTransactions;