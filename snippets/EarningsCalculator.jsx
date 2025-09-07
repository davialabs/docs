import React, { useState } from "react";

const EarningsCalculator = () => {
  const [reuseCount, setReuseCount] = useState(10);

  const calculateEarnings = (count) => {
    if (count <= 0) return 0;

    let earnings = 0;

    // First 10 reuses: $5 per reuse
    if (count <= 10) {
      earnings = count * 5;
    } else {
      // First 10 reuses: $50 guaranteed
      earnings = 50;

      // Reuses 11-200: $1 per reuse
      if (count <= 200) {
        earnings += (count - 10) * 1;
      } else {
        // Beyond 200: Custom plan
        earnings += 190; // 190 reuses from 11-200
        earnings = "Custom Plan";
      }
    }

    return earnings;
  };

  const earnings = calculateEarnings(reuseCount);
  const isCustomPlan = earnings === "Custom Plan";

  return (
    <div className="earnings-calculator p-4">
      <div className="text-center mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">
        {reuseCount >= 200 ? "200+ reuses" : `${reuseCount} reuses`}
      </div>

      <input
        type="range"
        min="1"
        max="250"
        value={reuseCount}
        onChange={(e) => setReuseCount(parseInt(e.target.value))}
        className="w-full mb-4"
      />

      <div className="text-center text-3xl font-bold text-blue-600 dark:text-blue-400">
        {isCustomPlan ? "Custom Plan" : `$${earnings.toLocaleString()}`}
      </div>
    </div>
  );
};

export default EarningsCalculator;
