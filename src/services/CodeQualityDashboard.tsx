import React from "react";

const CodeQualityDashboard: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-purple-400">Code Quality Insights Dashboard</h1>
    <p className="mb-4 text-white/90">See how our dashboards use AI to visualize code quality, vulnerabilities, and technical debt—helping you address issues proactively.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>Aggregates metrics from code analysis tools.</li>
      <li>Highlights critical vulnerabilities and debt.</li>
      <li>Tracks improvements and regressions over time.</li>
      <li>Customizable for your team's KPIs.</li>
    </ul>
  </div>
);

export default CodeQualityDashboard;
