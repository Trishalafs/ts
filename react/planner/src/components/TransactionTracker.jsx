import React, { useState } from 'react'
import { expenseCategories } from '../App'

const TransactionTracker = ({ addTransaction, transactions, deleteTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionCategory, setTransactionCategory] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return;
    
    // For expenses, ensure amount is negative.
    const finalAmount = transactionCategory === 'Income' ? numAmount : -Math.abs(numAmount);
    const transaction = {
      id: Date.now(),
      description,
      amount: finalAmount,
      category: transactionCategory,
    };

    addTransaction(transaction);
    setDescription('');
    setAmount('');
  };

  return (
    <section className="tracker">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select
          value={transactionCategory}
          onChange={(e) => setTransactionCategory(e.target.value)}
        >
          <option value="Income">Income</option>
          {expenseCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add Transaction</button>
      </form>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>
              {transaction.description}: ₹{Math.abs(transaction.amount).toFixed(2)} ({transaction.category})
            </span>
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TransactionTracker;
