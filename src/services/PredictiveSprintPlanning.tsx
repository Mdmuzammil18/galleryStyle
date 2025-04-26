import React from "react";

const PredictiveSprintPlanning: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-yellow-400">Predictive Sprint Planning</h1>
    <p className="mb-4 text-white/90">Discover how AI leverages your historical sprint data, user stories, and team performance to predict sprint outcomes and improve planning accuracy.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>Analyzes past sprints and story completion rates.</li>
      <li>Predicts bottlenecks and likely blockers.</li>
      <li>Provides data-driven estimates for new sprints.</li>
      <li>Integrates with Jira, Azure DevOps, and more.</li>
    </ul>
  </div>
);

export default PredictiveSprintPlanning;
