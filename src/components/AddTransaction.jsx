import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSave } from 'react-icons/fi';

const AddTransaction = ({ onAddTransaction }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    type: 'debit',
    paymentMethod: 'cash',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const newTransaction = {
      id: Date.now().toString(),
      name: formData.name,
      amount: parseFloat(formData.amount),
      type: formData.type,
      paymentMethod: formData.paymentMethod,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
    onAddTransaction(newTransaction);
    navigate('/view');
  };

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="card">
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="input"
            value={formData.amount}
            onChange={handleChange}
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Transaction Type</label>
          <div className="radio-group">
            <label className="radio-item">
              <input
                type="radio"
                name="type"
                value="debit"
                checked={formData.type === 'debit'}
                onChange={handleChange}
              />
              Debit
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="type"
                value="credit"
                checked={formData.type === 'credit'}
                onChange={handleChange}
              />
              Credit
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="label">Payment Method</label>
          <div className="radio-group">
            <label className="radio-item">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
              />
              Cash
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={formData.paymentMethod === 'online'}
                onChange={handleChange}
              />
              Online
            </label>
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="button secondary" onClick={() => navigate('/view')}>
            Cancel
          </button>
          <button type="submit" className="button">
            <FiSave className="mr-2" />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;