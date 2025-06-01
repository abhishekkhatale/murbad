import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ViewTransactions from './components/ViewTransactions';
import AddTransaction from './components/AddTransaction';
import FilterTransactions from './components/FilterTransactions';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Check if user is already authenticated
    const auth = localStorage.getItem('auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    // Load transactions from localStorage
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const handleLogin = (password) => {
    if (password === 'murbad882888') {
      localStorage.setItem('auth', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
  };

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/view" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/view"
              element={
                isAuthenticated ? (
                  <ViewTransactions
                    transactions={transactions}
                    onDelete={deleteTransaction}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/add"
              element={
                isAuthenticated ? (
                  <AddTransaction onAddTransaction={addTransaction} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/filter"
              element={
                isAuthenticated ? (
                  <FilterTransactions
                    transactions={transactions}
                    onDelete={deleteTransaction}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;