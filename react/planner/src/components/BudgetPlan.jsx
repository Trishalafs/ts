import React, { useState } from 'react'
import { expenseCategories } from '../App'

const BudgetPlan = ({ budgetPlan, setBudgetPlan, planSet, setPlanSet }) => {
  // Local state can be used if needed, here we use props directly.
  const handlePlanChange = (e, category) => {
    setBudgetPlan({
      ...budgetPlan,
      [category]: e.target.value
    });
  };

  const savePlan = (e) => {
    e.preventDefault();
    setPlanSet(true);
  };

  return (
    <section className="plan">
      <h2>Set Your Budget Plan</h2>
      <form onSubmit={savePlan}>
        {expenseCategories.map((cat) => (
          <div key={cat} className="plan-item">
            <label>{cat}:</label>
            <input
              type="number"
              placeholder={`Planned amount for ${cat}`}
              value={budgetPlan[cat]}
              onChange={(e) => handlePlanChange(e, cat)}
              required
            />
          </div>
        ))}
        <button type="submit">Save Plan</button>
      </form>
      {planSet && <p>Your budget plan has been set.</p>}
    </section>
  )
}

export default BudgetPlan;
