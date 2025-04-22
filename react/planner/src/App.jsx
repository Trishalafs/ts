import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import BudgetPlan from './components/BudgetPlan'
import TransactionTracker from './components/TransactionTracker'
import Summary from './components/Summary'

// Define the expense categories for planning.
export const expenseCategories = ["Food", "Rent", "Entertainment", "Other"];

function App() {
  // State for planned expenses per category.
  const [budgetPlan, setBudgetPlan] = useState({
    Food: '',
    Rent: '',
    Entertainment: '',
    Other: ''
  });
  const [planSet, setPlanSet] = useState(false);

  // State for transactions.
  const [transactions, setTransactions] = useState([]);

  // Add a transaction.
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Delete a transaction.
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Budget Planner & Tracker</h1>
      <Navigation />
      <Routes>
        <Route 
          path="/" 
          element={
            <BudgetPlan 
              budgetPlan={budgetPlan} 
              setBudgetPlan={setBudgetPlan}
              setPlanSet={setPlanSet}
              planSet={planSet}
            />
          } 
        />
        <Route 
          path="/tracker" 
          element={
            <TransactionTracker 
              addTransaction={addTransaction}
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          } 
        />
        <Route 
          path="/summary" 
          element={
            <Summary 
              budgetPlan={budgetPlan}
              planSet={planSet}
              transactions={transactions}
            />
          } 
        />
      </Routes>
    </div>
  )
}

export default App;
