import React from "react";

const ContextualDocumentation: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4 text-green-400">Contextual Documentation Generation</h1>
    <p className="mb-4 text-white/90">Explore how GPT-4 automatically generates and updates documentation from code comments, user stories, and PRs—keeping your docs always current.</p>
    <ul className="list-disc pl-6 text-white/80 space-y-2">
      <li>Scans codebase and PRs for undocumented logic.</li>
      <li>Generates summaries and docstrings using GPT-4.</li>
      <li>Suggests documentation updates in real-time.</li>
      <li>Reduces manual documentation effort for devs.</li>
    </ul>
  </div>
);

export default ContextualDocumentation;
