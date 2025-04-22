import React from 'react'
import { expenseCategories } from '../App'

const Summary = ({ budgetPlan, planSet, transactions }) => {
  // Calculate overall totals.
  const totalIncome = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = totalIncome + totalExpense;

  // Calculate actual expenses per category.
  const actualExpenses = expenseCategories.reduce((acc, cat) => {
    const total = transactions
      .filter(t => t.category === cat)
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    acc[cat] = total;
    return acc;
  }, {});

  return (
    <section className="summary">
      <h2>Summary</h2>
      <div className="totals">
        <div><strong>Income:</strong> ₹{totalIncome.toFixed(2)}</div>
        <div><strong>Expenses:</strong> ₹{Math.abs(totalExpense).toFixed(2)}</div>
        <div><strong>Balance:</strong> ₹{balance.toFixed(2)}</div>
      </div>

      {planSet && (
        <div className="category-summary">
          <h3>Plan vs. Actual (Expenses)</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Planned</th>
                <th>Actual</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
              {expenseCategories.map((cat) => {
                const planned = parseFloat(budgetPlan[cat]) || 0;
                const actual = actualExpenses[cat] || 0;
                const difference = planned - actual;
                return (
                  <tr key={cat}>
                    <td>{cat}</td>
                    <td>₹{planned.toFixed(2)}</td>
                    <td>₹{actual.toFixed(2)}</td>
                    <td style={{ color: difference >= 0 ? 'green' : 'red' }}>
                    ₹{difference.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Summary;
